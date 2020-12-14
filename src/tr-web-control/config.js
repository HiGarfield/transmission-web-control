system.config = $.extend(system.config, {
	// Whether to enable automatic refresh
	autoReload: true,
	// Automatic refresh rate (ms)
	reloadStep: 5000,
	// The default num of entries for each page
	pageSize: 200,
	// Enable/disable pagination for torrentlist.datagrid
	pagination: true,
	// Options in torrentlist.datagrid PageList
	pageList: [10, 20, 30, 40, 50, 100, 150, 200, 250, 300, 5000],
	// The initial interface defaults to the selected node, the name can refer to the language package tree
	defaultSelectNode: "actively",
	// Whether the torrent details are automatically expanded
	autoExpandAttribute: false,
	// default language
	defaultLang: "",
	//show Folders
	foldersShow: false,
	// theme
	theme: "default",
	// 是否显示BT服务器
	showBTServers: false,
        // ipinfo.io token
        ipInfoToken: ''
});

// 主题样式
system.themes = [{
		value: 'default',
		text: 'Default',
		group: 'Base'
	}
]
