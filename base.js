export default class SimplePreview {
  processContent(content) {
    const type =  typeof content;
    let processedContent;
 
    switch (type) {
      case 'object':
        processedContent = JSON.stringify(content, null, 2);
        break;
      case 'function':
        processedContent = `${content}`;
        break;
      default:
      case 'string':
        processedContent = `"${content}"`;
        break;
    }
    
    return processedContent;
  }
 
  print() {
    const elements = [];
    const { length } = arguments;
    for(let i = 0; i < length; i++) {
      const li = document.createElement('li');
      const pre = document.createElement('pre');
      const item = arguments[i];
      pre.innerHTML = length == 1 ? 
        `${this.processContent(item)}` : 
        `Result ${i}:\n${this.processContent(item)}`;
      li.appendChild(pre);
      elements.push(li);
    }

    document.querySelector('.output')
      .append(...elements);
  }
}
