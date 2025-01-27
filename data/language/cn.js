/* prettier-ignore */
/* exported language */
var language = [
	{ id: "settingsheader", string: "设置" },
	{ id: "savesettings", string: "保存" },
	{ id: "deletesettings", string: "放弃" },
	{ id: "applytoallelements", string: "全局套用字体" },
	{ id: "generaloptions", string: "通用选项" },
	{ id: "exportsettings", string: "导出设置" },
	{ id: "importsettings", string: "导入设置" },
	{ id: "exportsettingsjson", string: "导出设置JSON" },
	{ id: "importsettingsjson", string: "导入设置JSON" },
	// NAV MENU	
	{ id: "healthmana", string: "体力条 / 魔力条" },
	{ id: "tickers", string: "HoT、DoT与跳蓝判定" },
	{ id: "timers", string: "计时器监控" },
	{ id: "cooldowns", string: "自定义CD监控" },
	// COMPONENTS
	{ id: "healthbar", string: "体力条" },
	{ id: "manabar", string: "魔力条" },
	{ id: "mpticker", string: "跳蓝判定" },
	{ id: "dotticker", string: "DoT判定" },
	{ id: "hotticker", string: "HoT判定" },
	{ id: "pulltimers", string: "战斗开始倒计时" },
	{ id: "bufftimers", string: "Buff监控" },
	{ id: "dottimers", string: "DoT监控" },
	{ id: "stacksbar", string: "战斗资源" },
	{ id: "raidbuffs", string: "团辅监控" },
	{ id: "party", string: "成员技能冷却监控" },
	{ id: "skin", string: "皮肤" },
	{ id: "language", string: "语言" },
	{ id: "mitigations", string: "减伤监控" },
	{ id: "customcooldowns", string: "自定义CD监控" },
	{ id: "editcustomcooldowns", string: "编辑自定义CD监控" },
	{ id: "overrideoptions", string: "自定义设置" },
	{ id: "importexport", string: "导入 / 导出" },
	{ id: "debug", string: "调试" },
	// DESCRIPTIONS
	{ id: "generaldescription", string: "在此处修改ZeffUI的通用设定。" },
	{ id: "healthbardescription", string: "在此处修改体力条的设定。" },
	{ id: "manabardescription", string: "在此处修改魔力条的设定。" },
	{ id: "mptickerdescription", string: "在此处修改跳蓝判定的设定。" },
	{ id: "dottickerdescription", string: "在此处修改DoT判定的设定。" },
	{ id: "hottickerdescription", string: "在此处修改HoT判定的设定。" },
	{ id: "bufftimersdescription", string: "在此处修改你的个人Buff监控的设定。" },
	{ id: "dottimersdescription", string: "在此处修改你的个人DoT监控的设定。" },
	{ id: "pulltimersdescription", string: "在此处修改战斗开始倒计时的设定。" },
	{ id: "stacksbardescription", string: "在此处修改战斗资源监控的设定。" },
	{ id: "raidbuffdescription", string: "在此处修改团辅监控的设定（不含减伤型团辅）。" },
	{ id: "mitigationdescription", string: "在此处修改减伤监控的设定。" },
	{ id: "customcooldownsdescription", string: "在此处修改自定义CD监控的设定。" },
	{ id: "editcustomcooldownsdescription", string: "在此处编辑自定义CD技能监控的设定。" },
	{ id: "partydescription", string: "在此处修改成员技能冷却监控的设定。" },
	{ id: "overridedescription", string: "在此处自定义任何能力技监控的特殊设定。" },
	{ id: "importexportdescription", string: "在此处导入或导出设置。" },
	{ id: "debugdescription", string: "在此处修改ZeffUI的调试选项。" },
	{ id: "profiledescription", string: "在此处修改ZeffUI的档案设定。" },
	// COMPONENT PROPERTIES
	{ id: "posx", string: "X轴位置" },
	{ id: "posy", string: "Y轴位置" },
	{ id: "scale", string: "缩放" },
	{ id: "rotation", string: "旋转" },
	{ id: "padding", string: "图标间距" },
	{ id: "color", string: "颜色" },
	{ id: "image", string: "图标" },
	{ id: "example", string: "示例" },
	{ id: "growleft", string: "逆序向右对齐" },
	{ id: "growdirection", string: "排列方向" },
	{ id: "down", string: "向下" },
	{ id: "up", string: "向上" },
	{ id: "left", string: "向左" },
	{ id: "right", string: "向右" },
	{ id: "columns", string: "每行列数" },
	{ id: "hideoutofcombat", string: "脱战时隐藏" },
	{ id: "hidesolo", string: "非组队状态下隐藏" },
	{ id: "droppedoff", string: "效果结束时隐藏" },
	{ id: "alwaysshow", string: "总是显示（即使不在冷却中）" },
	{ id: "textformat", string: "文本格式" },
	{ id: "font", string: "字体" },
	{ id: "healthtext", string: "体力文本" },
	{ id: "manatext", string: "魔力文本" },
	{ id: "pulltimertext", string: "倒计时文本" },
	{ id: "bufftext", string: "Buff文本" },
	{ id: "dottext", string: "DoT文本" },
	{ id: "multidot", string: "多目标DoT（尚未实装）" },
	{ id: "ability", string: "能力技" },
	{ id: "abilityenabled", string: "启用监控" },
	{ id: "duration", string: "持续时间" },
	{ id: "cooldown", string: "冷却时间" },
	{ id: "overridedefaults", string: "启用自定义" },
	{ id: "ttsenabled", string: "启用TTS" },
	{ id: "ttstype", string: "TTS类型" },
	{ id: "abilitycooldown", string: "能力技冷却时间" },
	{ id: "abilityduration", string: "能力技持续时间" },
	{ id: "oncast", string: "生效时" },
	{ id: "durationcolor", string: "持续时间颜色" },
	{ id: "cooldowncolor", string: "冷却时间颜色" },
	{ id: "durationoutlinecolor", string: "持续时描边线颜色" },
	{ id: "cooldownoutlinecolor", string: "冷却时描边线颜色" },
	{ id: "durationbold", string: "持续时加粗文本" },
	{ id: "cooldownbold", string: "冷却时加粗文本" },
	{ id: "durationoutline", string: "持续时描边线" },
	{ id: "cooldownoutline", string: "冷却时描边线" },
	{ id: "includealliance", string: "包含团队成员" },
	{ id: "orderbypartymember", string: "按照小队排列" },
	{ id: "order", string: "顺序" },
	{ id: "partyorder", string: "小队排列（拖动修改）" },
	{ id: "mode", string: "模式" },
	{ id: "add", string: "添加" },
	{ id: "edit", string: "编辑" },
	{ id: "delete", string: "删除" },
	{ id: "save", string: "保存" },
	{ id: "noabilitiesfound", string: "未找到能力..." },
	{ id: "search", string: "搜索" },
	{ id: "id", string: "ID" },
	{ id: "jobrole", string: "职业 / 职能" },
	{ id: "pvp", string: "PvP" },
	{ id: "usewebtts", string: "启用第三方TTS" },
	{ id: "jobthresholds", string: "多段阈值" },
	{ id: "lowcolor", string: "较低时 颜色" },
	{ id: "medcolor", string: "中等时 颜色" },
	{ id: "specificjobsonly", string: "特定职业限制" },
	{ id: "ttsearly", string: "TTS提前播报（秒）" },
	{ id: "charges", string: "充能次数" },
	{ id: "warning", string: "警告!" },
	{ id: "textalign", string: "文本对齐" },
	{ id: "center", string: "居中" },
	{ id: "alwaystick", string: "始终显示判定" },
	{ id: "usehdicons", string: "使用高清图标" },
	{ id: "type", string: "类型" },
	{ id: "staticfontsizeenabled", string: "使用静态字体大小" },
	{ id: "staticfontsize", string: "静态字体大小" },
	{ id: "fontxoffset", string: "字体X坐标偏移" },
	{ id: "fontyoffset", string: "字体Y坐标偏移" },
	{ id: "setjob", string: "设置职业" },
	{ id: "customfonts", string: "自定义字体" },
	{ id: "customcss", string: "自定CSS" },
	{ id: "profiles", string: "档案" },
	{ id: "load", string: "加载" },
	{ id: "profilename", string: "档案名" },
	{ id: "job", string: "职业" },
	{ id: "linkjob", string: "绑定到此职业" },
	{ id: "linkall", string: "绑定到全部职业" },
	{ id: "unlink", string: "解绑" },
	{ id: "includeprofiles", string: "导出包含档案的设置" },
	// SKINS
	{ id: "skindefault", string: "默认（SE风格）" },
	{ id: "skinmaterialdark", string: "Material Dark（由skotlex设计）" },
	{ id: "skinmaterialdiscord", string: "Material Discord（由skotlex设计）" },
	{ id: "skinhydaelyn", string: "Hydaelyn UI （由Vec7rex设计）" },
	// COLORS
	{ id: "colordarkred", string: "暗红色" },
	{ id: "colorbrightred", string: "鲜红色" },
	{ id: "colorbabyblue", string: "淡蓝色" },
	{ id: "colorgreenblue", string: "蓝绿色" },
	{ id: "colortoxicgreen", string: "荧光绿" },
	{ id: "colorlightblue", string: "浅蓝色" },
	{ id: "colordarkblue", string: "暗蓝色" },
	{ id: "colordarkgreen", string: "深绿色" },
	{ id: "colorjunglegreen", string: "丛林绿" },
	{ id: "colorpurple", string: "暗紫色" },
	{ id: "colorfuchsia", string: "紫红色" },
	{ id: "colorlightpink", string: "浅粉色" },
	{ id: "colorlightgold",	string: "浅金色"  },
	{ id: "colordarkgold", string: "暗金色" },
	{ id: "colororange", string: "亮橙色" },
	{ id: "colorgrey", string: "浅灰色" },
	// JOBS	
	{ id: "pld", string: "骑士" },
	{ id: "gla", string: "剑术师" },
	{ id: "war", string: "战士" },
	{ id: "mrd", string: "斧朮师" },
	{ id: "drk", string: "暗黑骑士" },
	{ id: "gnb", string: "绝枪战士" },
	{ id: "whm", string: "白魔法师" },
	{ id: "cnj", string: "幻术师" },
	{ id: "sch", string: "学者" },
	{ id: "ast", string: "占星术士" },
	{ id: "sge", string: "Sage" },
	{ id: "mnk", string: "武僧" },
	{ id: "pgl", string: "格斗家" },
	{ id: "drg", string: "龙骑士" },
	{ id: "lnc", string: "枪术师" },
	{ id: "nin", string: "忍者" },
	{ id: "rog", string: "双剑师" },
	{ id: "sam", string: "武士" },
	{ id: "rpr", string: "Reaper" },
	{ id: "brd", string: "诗人" },
	{ id: "arc", string: "弓箭手" },
	{ id: "mch", string: "机工士" },
	{ id: "dnc", string: "舞者" },
	{ id: "blm", string: "黑魔法师" },
	{ id: "thm", string: "咒术师" },
	{ id: "smn", string: "召唤师" },
	{ id: "acn", string: "秘术师" },
	{ id: "rdm", string: "赤魔法师" },
	{ id: "blu", string: "青魔法师" },
	{ id: "tank", string: "防御" },
	{ id: "healer", string: "治疗" },
	{ id: "dps", string: "D" },
	{ id: "meleedps", string: "近D" },
	{ id: "rangeddps", string: "远敏" },
	{ id: "casterdps", string: "法师" },
	{ id: "melee", string: "近战职业" },
	{ id: "ranged", string: "远程职业" },
	{ id: "caster", string: "法系职业" },
	{ id: "other", string: "其他" },
	// UI TEXT
	{ id: "dot-anchor", string: "DoT计时器位置" },
	{ id: "buff-anchor", string: "Buff监控位置" },
	{ id: "raidbuffs-anchor", string: "团队Buff监控位置" },
	{ id: "mitigation-anchor", string: "减伤位置" },
	{ id: "party-anchor", string: "小队列表位置" },
	{ id: "customcd-anchor", string: "自定义CD监控位置" },
	{ id: "pulltimer", string: "开怪倒计时" },
	// CONTEXT MENU
	{ id: "lock", string: "锁定 / 解锁模块" },
	{ id: "grid", string: "切换网格" },
	{ id: "reload", string: "刷新" },
	{ id: "settings", string: "设置" },
	{ id: "close", string: "关闭菜单" },
	// MESSAGES
	{ id: "jsonwarning", string: "只有在你知道自己在做什么的情况下，才以JSON格式导入/导出!" },
	{ id: "reloadoverlay", string: "请刷新悬浮窗以还原默认设置。" },
	{ id: "saveandclosewindow", string: "你想保存设置并关闭这个窗口吗？" },
	{ id: "deleteallsettings", string: "你确定你要删除所有的设置吗？" },
	{ id: "activesettingswindow", string: "似乎已经有一个活动的设置窗口打开了。你想关闭前一个窗口并打开一个新窗口吗？" },
	{ id: "currentsettingscopied", string: "你当前的设置已被复制到剪贴板中。" },
	{ id: "importsettingsoverwrite", string: "你确定要导入这些设置吗？这将完全覆盖你以前的设置！" },
	{ id: "invalidsettingsstring", string: "设置字符串无效，请仔细检查你所粘贴的内容。" },
	{ id: "lockoverlay", string: "必须锁定悬浮窗才能移动UI锚点。" },
	{ id: "deleteprofile", string: "你确定要删除这个档案吗？" },
	{ id: "experimentalsavesettings", string: "实验性功能，可能导致一些问题。请先导出保存你的设置。" },
];
