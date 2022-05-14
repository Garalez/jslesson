'use strict';

const allBLocks = document.querySelectorAll('.item');
const allLists = document.querySelectorAll('.props__list');
const allItems = document.querySelectorAll('.props__item');
const green = document.querySelectorAll('.props__item_two');
const cloneYellowText = allLists[4].cloneNode(true);
const cloneBlackBlock = allBLocks[0].cloneNode(true);

allItems[2].after(allItems[14]);
allLists[3].replaceWith(cloneYellowText);
allLists[4].replaceWith(allLists[3]);
allLists[2].append(green[8]);
allLists[2].append(green[9]);
allBLocks[0].replaceWith(allBLocks[1]);
allBLocks[3].after(cloneBlackBlock);
