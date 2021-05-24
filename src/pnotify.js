import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import * as PNotify from '@pnotify/core';

PNotify.defaults.styling = 'brighttheme';
PNotify.defaults.icons = 'brighttheme';
PNotify.defaults.maxTextHeight = null;

export const tooManyItems = () =>
{
  PNotify.error({
    text: 'Too many matches found. Please enter a more specific query!',
    width: '360px'
  });
}

export const noItemsQualified = () =>
{
  PNotify.error({
    text: 'This country was not found!',
    width: '360px'
  });
}

export const closeAllMessages = () => {
  PNotify.defaultStack.close();
}