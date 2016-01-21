module.exports = function (win) {
  return [
    {
      label: 'Dropbox Paper',
      submenu: [
        {
          label: 'About Dropbox Paper',
          selector: 'orderFrontStandardAboutPanel:'
        },
        { type: 'separator' },
        {
          label: 'Hide Paper',
          accelerator: 'Command+H',
          selector: 'hide:'
        },
        {
          label: 'Hide Others',
          accelerator: 'Command+Shift+H',
          selector: 'hideOtherApplications:'
        },
        {
          label: 'Show All',
          selector: 'unhideAllApplications:'
        },
        { type: 'separator' },
        {
          label: 'Quit',
          accelerator: 'Command+Q',
          selector: 'terminate:'
        },
      ]
    },
    {
      label: 'Edit',
      submenu: [
        {
          label: 'Undo',
          accelerator: 'Command+Z',
          selector: 'undo:'
        },
        {
          label: 'Redo',
          accelerator: 'Shift+Command+Z',
          selector: 'redo:'
        },
        { type: 'separator' },
        {
          label: 'Cut',
          accelerator: 'Command+X',
          selector: 'cut:'
        },
        {
          label: 'Copy',
          accelerator: 'Command+C',
          selector: 'copy:'
        },
        {
          label: 'Paste',
          accelerator: 'Command+V',
          selector: 'paste:'
        },
        {
          label: 'Select All',
          accelerator: 'Command+A',
          selector: 'selectAll:'
        }
      ]
    },
    {
      label: 'View',
      submenu: [
        {
          label: 'Reload',
          accelerator: 'Command+R',
          click: function() { win.reload(); }
        },
        {
          label: 'Toggle DevTools',
          accelerator: 'Alt+Command+I',
          click: function() { win.toggleDevTools(); }
        },
        {
          label: 'Back',
          accelerator: 'Alt+Command+Left',
          click: function () {win.webContents.goBack();}
        },
        {
          label: 'Forward',
          accelerator: 'Alt+Command+Right',
          click: function () {win.webContents.goForward();}
        },
        {
          label: 'Home',
          accelerator: 'Alt+Command+H',
          click: function () {
            win.loadUrl('https://paper.dropbox.com/?role=personal', {
              userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.52 Safari/537.36'
            });
          }
        }
      ]
    },
    {
      label: 'Window',
      submenu: [
        {
          label: 'Minimize',
          accelerator: 'Command+M',
          selector: 'performMiniaturize:'
        },
        {
          label: 'Close',
          accelerator: 'Command+W',
          selector: 'hide:'
        },
        { type: 'separator' },
        {
          label: 'Bring All to Front',
          selector: 'arrangeInFront:'
        }
      ]
    }
  ];
};
