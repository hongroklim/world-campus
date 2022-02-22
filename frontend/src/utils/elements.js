/**
 * Get converted text which is applied of hyperlink
 *
 * @param {String} text - text to be parsed
 * @returns {Element}
 */
export const getLinkText = (text) => {
  const regexp = new RegExp(/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi);

  // TODO parseLinkText
  // str.matchAll(regexp)
  //
  // for (const match of matches) {
  //  console.log(`Found ${match[0]} start=${match.index} end=${match.index + match[0].length}.`);
  // }

  return text;
}

/**
 * Parse "|" separated items into list elements
 *
 * @param {String} text - | (O|X) separated items
 * @returns {List<Object>} - {"yn": Boolean, "text": String}
 */
export const getListItems = (text) => {
  if(!text)
    return [];

  return text.split('|').filter(e => e).map(e => {
    const item = {};
    item.text = e.trim();

    // Set YN if the label exists
    if(/^\([O|X]\)/g.test(item.text)){
      item.yn = item.text.startsWith("(O)");
      item.text = item.text.replace(/^\([O|X]\)\s*/g, '');
    }

    return item;
  });
}
