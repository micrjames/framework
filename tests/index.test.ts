import jsdom from "jsdom";                                                     
const { JSDOM } = jsdom;
require('@testing-library/jest-dom');
import fs from 'fs';
import path from 'path';

describe("", () => {
   let dom: JSDOM;                                                           
   let document: Document;
   let container: Element;
   beforeAll(() => {
	  const html = fs.readFileSync(path.resolve(__dirname, "..", "src", "template.html"), 'utf8');
      dom = new JSDOM(html, {runScripts: 'dangerously'});
      document = dom.window.document;
      const body = document.body;
      container = body.firstElementChild;
   });
   describe("", () => {
	  test.todo("");
	  test.todo("");
	  test.todo("");
	  test.todo("");
   });
});
