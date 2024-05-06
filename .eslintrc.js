const fs = require("fs");

module.exports = {
  extends: [
    "next/core-web-vitals",
    "plugin:storybook/recommended",
    "prettier",
    "plugin:storybook/recommended",
    "plugin:import/recommended",
    "plugin:react/recommended",
    "plugin:import/typescript",
    "plugin:cypress/recommended",
  ],
  rules: {
    "react/react-in-jsx-scope": "off",
    "import/order": [
      1,
      {
        groups: [
          "external",
          "builtin",
          "internal",
          "sibling",
          "parent",
          "index",
        ],
        pathGroups: [
          ...getDirectoriesToSort().map((singleDir) => ({
            pattern: `${singleDir}/**`,
            group: "internal",
          })),
          {
            pattern: "env",
            group: "internal",
          },
          {
            pattern: "theme",
            group: "internal",
          },
          {
            pattern: "public/**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "react",
            group: "external",
            position: "before",
          },
          {
            pattern: "next",
            group: "external",
            position: "before",
          },
        ],
        pathGroupsExcludedImportTypes: ["internal"],
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
  },
};

function getDirectoriesToSort() {
  const ignoredSortingDirectories = [
    ".git",
    ".next",
    ".vscode",
    "node_modules",
  ];
  return getDirectories(process.cwd()).filter(
    (f) => !ignoredSortingDirectories.includes(f),
  );
}

function getDirectories(path) {
  return fs.readdirSync(path).filter(function (file) {
    return fs.statSync(path + "/" + file).isDirectory();
  });
}
