const StyleDictionary = require("style-dictionary");

// StyleDictionary.registerTransform({
//   type: 'value',
//   transitive: true,
//   name: 'color/stitches',
//   matcher: ({ attributes: { category } }) => category === 'color',
//   transformer: ({ attributes: { name: nameAttribute }, name, value }) => ({
//     name: nameAttribute ?? name,
//     color: value,
//   }),
// });

StyleDictionary.registerFormat({
  name: `color/tachyons`,
  formatter: function ({ dictionary }) {
    function camelToUnderscore(key) {
      var result = key.replace(/([A-Z])/g, " $1");
      return result.split(" ").join("-").toLowerCase();
    }
    return dictionary.allTokens
      .filter(({ type }) => type === "color")
      .map((token) => {
        let value = token.value;
        if (dictionary.usesReference(token.original.value)) {
          const refs = dictionary.getReferences(token.original.value);
          refs.forEach((ref) => {
            value = value.replace(ref.value, function () {
              return ref.name;
            });
          });
        }
        const name = camelToUnderscore(token.name);
        return [
          `$${name}: ${value};\n`,
          `.${name} { color: $${name}; }\n`,
          `.b--${name} { border-color: $${name}; }\n`,
          `.bg-${name} { background-color: $${name}; }\n`,
          "\n",
        ];
      })
      .flat()
      .join("");
  },
});

module.exports = {
  source: ["tokens/**/*.json"],
  transform: {},
  format: {
    "color/stitches": ({ dictionary, platform }) => {
      const { allTokens } = dictionary;
      const colorTokens = allTokens
        .filter(({ type }) => type === "color")
        .reduce((acc, { name, value }) => {
          acc[name] = value;
          return acc;
        }, {});
      return JSON.stringify(colorTokens);
    },
  },
  platforms: {
    react: {
      //transforms: ['color/stitches'],
      buildPath: "build/",
      files: [
        {
          destination: "_stitches-colors.json",
          format: "color/stitches",
        },
      ],
    },
    ember: {
      buildPath: "build/",
      files: [
        {
          destination: "_tachyons-colors.scss",
          format: "color/tachyons",
        },
      ],
    },
  },
};
