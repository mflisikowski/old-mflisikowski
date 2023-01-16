/**
 * @fileoverview A utility object containing functions for html modifications.
 * @requires validator
 * @requires cheerio
 * @requires uuid4
 * @module utils/htmls
 */

import { Validators } from './validators';
const cheerio = require('cheerio');
import uuid4 from 'uuid4';

const defauldAllowed = [{ key: 'text' }, { key: 'tag' }];

export const Htmls = {
  /**
   * Get the attributes of a Cheerio element
   * @param {Object} element - The Cheerio element to get the attributes of
   * @returns {Object} - An object containing the attributes of the Cheerio element with the class attribute as an array
   */

  getAttributes: (element) => {
    return element.attributes.reduce((attributes, { name, value }) => {
      if (name === 'class') {
        attributes[name] = value.split(' ');
      } else {
        attributes[name] = value;
      }
      return attributes;
    }, {});
  },

  /**
   * Convert Cheerio element to JSON
   * @param {Object} html - The Cheerio element to be converted to JSON
   * @param {Array<string>} allowed - An array of allowed types to include in the output JSON
   * @returns {Object} - An JSON object representing the Cheerio element
   */

  parse: (html, allowed = defauldAllowed) => {
    let uuid = uuid4();

    const element = {
      id: uuid,
      TagName: html.tagName,
      attributes: {
        ...getAttributes(html),
      },
    };

    const children =
      html.children.filter((child) =>
        allowed.some((type) => type.key === child?.type)
      ) || [];

    element.children = children?.map((child) => {
      switch (child?.type) {
        case 'text':
          return {
            content: child.data,
            type: 'text',
          };
        case 'tag':
          return parse(child);
        default:
          break;
      }
    });

    return element;
  },

  /**
   * Convert HTML to JSON
   * @param {string} html - The HTML to be converted to JSON
   * @returns {Array<Object>} - An array of JSON objects representing the HTML
   */

  convert: (html) => {
    const $ = cheerio.load(html);

    const $body = $('body');
    const $children = $body.children();
    const json = [];

    $children.each((i, element) => {
      const parsed = Html.parse(element);
      json.push(parsed);
    });

    return json;
  },

  /**
   * Convert JSON to HTML
   * @param {Array<Object>} json - The JSON to be converted to HTML
   * @returns {string} - The HTML string
   */

  render: (json) => {
    const renderChildren = (children) => {
      return children.map((child) => {
        if (child.type === 'text') {
          return ` ${child.content} `;
        } else {
          return (
            <child.TagName
              className={child.attributes.classname}
              key={child.id}
            >
              {renderChildren(child.children)}
            </child.TagName>
          );
        }
      });
    };

    const elements = Validators.isArray(json)
      ? json.map(({ TagName, attributes, children, id }) => (
          <TagName className={attributes?.classname} key={id}>
            {renderChildren(children)}
          </TagName>
        ))
      : null;

    return <>{elements}</>;
  },

  /**
   * Removes unnecessary characters and whitespace from an HTML string to minimize its size.
   * @param {string} html - The HTML string to minify.
   * @returns {string} The minified HTML string.
   * @removes {string} newline characters - Removes all newline characters (\r and \n).
   * @removes {string} whitespace between tags - Removes all whitespace between HTML tags.
   * @removes {string} {' '} - Removes all instances of {' '}.
   * @removes {string} comments - Removes all HTML comments.
   * @trims {string} leading and trailing whitespace - Removes leading and trailing whitespace from the HTML string.
   * @replaces {string} multiple spaces - Replaces all instances of two or more spaces with a single space.
   */

  minimize: (html) => {
    return html
      .replace(/\r?\n|\r/g, '')
      .replace(/>\s+</g, '><')
      .replace(/{' '}/g, '')
      .replace(/<!--[\s\S]*?-->/g, '')
      .trim()
      .replace(/ {2,}/g, ' ');
  },
};
