"use strictt";

const fs = require("fs");

const marked = require("marked");
const cheerio = require("cheerio");

function makeCollapsibleFaq(html) {
  // FAQ questions and answers should be in the div with id=accordion
  // Questions should be text only in h4 tags
  // Answers should be following elements until next h4
  // Section headers of FAQ should be h2

  const $ = cheerio.load(html);

  // Iterate over FAQ section headers and questions
  const questions = $("#accordion").children().filter("h2, h4").map((i, el) => {
    if (el.tagName.toLowerCase() === "h2") {
      return el;
    }
    //const h4 = $(el);
    // Wrap question and answer in bootstrap collapsible panels
    const headingId = `heading${i + 1}`;
    const collapseId = `collapse${i + 1}`;

    // Replace heading with panel using h4 text
    const question = $(
`<div class="panel-heading" role="tab" id="${headingId}">
  <h4 class="panel-title">
    <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#${collapseId}" aria-expanded="false" aria-controls="${collapseId}">
      ${$(el).text()}
    </a>
  </h4>
</div>`
    );

    // Fetch answer elements (until next Q or heading)
    const answerElements = $(el)
      .nextUntil("h4")
      .not("h2");

    const answerPanel = $(
`<div id="${collapseId}" class="panel-collapse collapse" role="tabpanel" aria-labelledby="${headingId}">
  <div class="panel-body">
  </div>
</div>`
    );
    // Add answer elements to answer panel
    answerElements.appendTo(answerPanel.children(".panel-body"));

    const panel = $(
      `<div class="panel panel-default"></div>`
    );
    panel.append(question, answerPanel);
    return panel.get();
  });

  $("#accordion").empty().append(questions);

  return $.html();
}

function generatePages() {
  const pages = [
    {
      source: "pages/Help.md",
      target: "wwwroot/help/help.html",
      transform: text => marked(text)
    },
    {
      source: "pages/FAQ.md",
      target: "wwwroot/help/faq.html",
      transform: text => makeCollapsibleFaq(marked(text))
    }
  ];
  pages.forEach(({ source, target, transform }) => {
    var markdown = fs.readFileSync(source, { encoding: "utf8" });
    fs.writeFileSync(target, transform(markdown));
  });
}

// For debugging
//generatePages();

module.exports = generatePages;
