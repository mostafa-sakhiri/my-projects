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
    return dictionary.allTokens
      .filter(({ type }) => type === "color")
      .map((token) => {
        let value = JSON.stringify(token.value);
        if (dictionary.usesReference(token.original.value)) {
          const refs = dictionary.getReferences(token.original.value);
          refs.forEach((ref) => {
            value = value.replace(ref.value, function () {
              return `${ref.name}`;
            });
          });
        }
        return [
          `$${token.name}: ${value};\n`,
          `.${token.name} { color: $${token.name}; }\n`,
          `.b--${token.name} { border-color: $${token.name}; }\n`,
          `.bg--${token.name} { background-color: $${token.name}; }\n`,
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
        .map(({ name, value }) => ({ name, color: value }));
      return JSON.stringify([{ colors: colorTokens }]);
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
