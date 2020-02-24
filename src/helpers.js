function choice (items){
  let randomItem = items[Math.floor(Math.random() * items.length)];

  return randomItem;
}

function remove (items, item){
  for(let i = 0; i < items.length; i++){
    if( items[i] === item){
      // let removedItem = items[i]
      items.splice(i, 1);
      return items;
      
    }
  }
  return undefined;
}

export { choice, remove };