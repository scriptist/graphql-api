const enums = require("../../../src/enums");
const keywords = require("../../keywords");
const speaker = require("../../people/carolyn-stransky");

module.exports = {
  speakers: [speaker],
  title: "Life is hard and so is learning GraphQL",
  description: `Learning a new technology can be daunting. For many of us, the way we try to make sense of a new technology is through their documentation and the examples we see online. The problem with GraphQL is that - because there’s no “vanilla” GraphQL - there’s no central hub for all of the information and tooling necessary to learn. While documentation is meant to serve as a tool for teaching, it’s underutilized and scattered throughout our community.

Consider this talk a voyage through the ups and downs of learning GraphQL. Along the way, we’ll touch on the major pain points faced by GraphQL beginners and how we can better enable our docs for learning and comprehension.`,
  type: enums.TALK,
  keywords: [keywords.GRAPHQL],
};
