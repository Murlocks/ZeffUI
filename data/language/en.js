/* prettier-ignore */
/* exported language */
var language = [
	{ id: "settingsheader", string: "Settings" },
	{ id: "savesettings", string: "Save Settings" },
	{ id: "deletesettings", string: "Delete Settings" },
	{ id: "applytoallelements", string: "Apply default font to all elements" },
	{ id: "generaloptions", string: "General Options" },
	{ id: "exportsettings", string: "Export Settings" },
	{ id: "importsettings", string: "Import Settings" },
	{ id: "exportsettingsjson", string: "Export JSON" },
	{ id: "importsettingsjson", string: "Import JSON" },
	// NAV MENU	
	{ id: "healthmana", string: "Health / Mana" },
	{ id: "tickers", string: "Tickers" },
	{ id: "timers", string: "Timers" },
	{ id: "cooldowns", string: "Cooldowns" },
	// COMPONENTS
	{ id: "healthbar", string: "Healthbar" },
	{ id: "manabar", string: "Manabar" },
	{ id: "mpticker", string: "MP Ticker" },
	{ id: "dotticker", string: "DoT Ticker" },
	{ id: "hotticker", string: "HoT Ticker" },
	{ id: "pulltimers", string: "Pulltimers" },
	{ id: "bufftimers", string: "Buff Timers" },
	{ id: "dottimers", string: "DoT Timers" },
	{ id: "stacksbar", string: "Stacks Bar" },
	{ id: "raidbuffs", string: "Raid Buffs" },
	{ id: "party", string: "Party Cooldowns" },
	{ id: "skin", string: "Skin" },
	{ id: "language", string: "Language" },
	{ id: "mitigations", string: "Mitigations" },
	{ id: "customcooldowns", string: "Custom Cooldowns" },
	{ id: "editcustomcooldowns", string: "Edit Custom Cooldowns" },
	{ id: "overrideoptions", string: "Override Options" },
	{ id: "importexport", string: "Import / Export" },
	{ id: "debug", string: "Debug" },
	// DESCRIPTIONS
	{ id: "generaldescription", string: "Here you can find general options for ZeffUI." },
	{ id: "healthbardescription", string: "Here you can set your options for your healthbar." },
	{ id: "manabardescription", string: "Here you can set your options for your manabar." },
	{ id: "mptickerdescription", string: "Here you can set your options for your MP Ticker" },
	{ id: "dottickerdescription", string: "Here you can set your options for your DoT Ticker" },
	{ id: "hottickerdescription", string: "Here you can set your options for your HoT Ticker" },
	{ id: "bufftimersdescription", string: "Here you can set your options for your personal buffs." },
	{ id: "dottimersdescription", string: "Here you can set your options for your personal debuffs." },
	{ id: "pulltimersdescription", string: "Here you can set your options for the pulltimer." },
	{ id: "stacksbardescription", string: "Here you can set your options for your personal stacks" },
	{ id: "raidbuffdescription", string: "Here you can set your options for the raidbuffs (DPS Buffs/Debuffs only)." },
	{ id: "mitigationdescription", string: "Here you can set your options for your mitigation bar." },
	{ id: "customcooldownsdescription", string: "Here you can set your options for your custom cooldowns." },
	{ id: "editcustomcooldownsdescription", string: "Here you can edit custom cooldown abilities." },
	{ id: "partydescription", string: "Here you can set your options for your party cooldowns." },
	{ id: "overridedescription", string: "Here you can change specific default settings for all abilities." },
	{ id: "importexportdescription", string: "Here you can import or export your settings." },
	{ id: "debugdescription", string: "Here you can find debug options for ZeffUI." },
	{ id: "profiledescription", string: "Here you can find profile options for ZeffUI." },
	// COMPONENT PROPERTIES
	{ id: "posx", string: "Position X" },
	{ id: "posy", string: "Position Y" },
	{ id: "scale", string: "Scale" },
	{ id: "rotation", string: "Rotation" },
	{ id: "padding", string: "Padding" },
	{ id: "color", string: "Color" },
	{ id: "image", string: "Image" },
	{ id: "example", string: "Example" },
	{ id: "growleft", string: "Grow icons to the left" },
	{ id: "growdirection", string: "Grow Direction" },
	{ id: "down", string: "Down" },
	{ id: "up", string: "Up" },
	{ id: "left", string: "Left" },
	{ id: "right", string: "Right" },
	{ id: "columns", string: "Columns per row" },
	{ id: "hideoutofcombat", string: "Hide out of Combat" },
	{ id: "hidesolo", string: "Hide when not in Party" },
	{ id: "droppedoff", string: "Hide when dropped off" },
	{ id: "alwaysshow", string: "Always show abilities (when not on cooldown)" },
	{ id: "textformat", string: "Text Format" },
	{ id: "font", string: "Font" },
	{ id: "healthtext", string: "Health Text" },
	{ id: "manatext", string: "Mana Text" },
	{ id: "pulltimertext", string: "Pulltimer Text" },
	{ id: "bufftext", string: "Buff Text" },
	{ id: "dottext", string: "DoT Text" },
	{ id: "multidot", string: "MultiDoT (not implemented yet)" },
	{ id: "ability", string: "Ability" },
	{ id: "abilityenabled", string: "Ability Enabled" },
	{ id: "duration", string: "Duration" },
	{ id: "cooldown", string: "Cooldown" },
	{ id: "overridedefaults", string: "Override Defaults" },
	{ id: "ttsenabled", string: "TTS Enabled" },
	{ id: "ttstype", string: "TTS Type" },
	{ id: "abilitycooldown", string: "Ability Cooldown" },
	{ id: "abilityduration", string: "Ability Duration" },
	{ id: "oncast", string: "On Cast" },
	{ id: "durationcolor", string: "Duration Color" },
	{ id: "cooldowncolor", string: "Cooldown Color" },
	{ id: "durationoutlinecolor", string: "Duration Outline Color" },
	{ id: "cooldownoutlinecolor", string: "Cooldown Outline Color" },
	{ id: "durationbold", string: "Duration Bold Text" },
	{ id: "cooldownbold", string: "Cooldown Bold Text" },
	{ id: "durationoutline", string: "Duration Outline" },
	{ id: "cooldownoutline", string: "Cooldown Outline" },
	{ id: "includealliance", string: "Include Alliance in Party Members" },
	{ id: "orderbypartymember", string: "Order by Party Member" },
	{ id: "order", string: "Order" },
	{ id: "partyorder", string: "Party Order (drag and drop)" },
	{ id: "mode", string: "Mode" },
	{ id: "add", string: "Add" },
	{ id: "edit", string: "Edit" },
	{ id: "delete", string: "Delete" },
	{ id: "save", string: "Save" },
	{ id: "noabilitiesfound", string: "No abilities found..." },
	{ id: "search", string: "Search" },
	{ id: "id", string: "ID" },
	{ id: "jobrole", string: "Job / Role" },
	{ id: "pvp", string: "PvP" },
	{ id: "usewebtts", string: "Use Baidu TTS" },
	{ id: "jobthresholds", string: "Job Thresholds" },
	{ id: "lowcolor", string: "Low Color" },
	{ id: "medcolor", string: "Medium Color" },
	{ id: "specificjobsonly", string: "Specific Jobs Only" },
	{ id: "ttsearly", string: "TTS Seconds Early" },
	{ id: "charges", string: "Charges" },
	{ id: "warning", string: "Warning!" },
	{ id: "textalign", string: "Text Align" },
	{ id: "center", string: "Center" },
	{ id: "alwaystick", string: "Always Tick" },
	{ id: "usehdicons", string: "Use HD Icons" },
	{ id: "type", string: "Type" },
	{ id: "staticfontsizeenabled", string: "Static Font Size Enabled" },
	{ id: "staticfontsize", string: "Static Font Size" },
	{ id: "fontxoffset", string: "Font X Offset" },
	{ id: "fontyoffset", string: "Font Y Offset" },
	{ id: "setjob", string: "SET JOB" },
	{ id: "customfonts", string: "Custom Fonts" },
	{ id: "customcss", string: "Custom CSS" },
	{ id: "profiles", string: "Profiles" },
	{ id: "load", string: "Load" },
	{ id: "profilename", string: "Profile Name" },
	{ id: "job", string: "Job" },
	{ id: "linkjob", string: "Link to job" },
	{ id: "linkall", string: "Link to all" },
	{ id: "unlink", string: "Unlink" },
	{ id: "includeprofiles", string: "Include profiles" },
	// SKINS
	{ id: "skindefault", string: "Default (by Square Enix)" },
	{ id: "skinmaterialdark", string: "Material Dark (by skotlex)" },
	{ id: "skinmaterialdiscord", string: "Material Discord (by skotlex)" },
	{ id: "skinhydaelyn", string: "Hydaelyn UI (by Vec7rex)" },
	// COLORS
	{ id: "colordarkred", string: "Dark Red" },
	{ id: "colorbrightred", string: "Bright Red" },
	{ id: "colorbabyblue", string: "Baby Blue" },
	{ id: "colorgreenblue", string: "Green Blue" },
	{ id: "colortoxicgreen", string: "Toxic Green" },
	{ id: "colorlightblue", string: "Light Blue" },
	{ id: "colordarkblue", string: "Dark Blue" },
	{ id: "colordarkgreen", string: "Dark Green" },
	{ id: "colorjunglegreen", string: "Jungle Green" },
	{ id: "colorpurple", string: "Purple" },
	{ id: "colorfuchsia", string: "Fuchsia" },
	{ id: "colorlightpink", string: "Light Pink" },
	{ id: "colorlightgold",	string: "Light Gold"  },
	{ id: "colordarkgold", string: "Dark Gold" },
	{ id: "colororange", string: "Orange" },
	{ id: "colorgrey", string: "Grey" },
	// JOBS	
	{ id: "pld", string: "Paladin" },
	{ id: "gla", string: "Gladiator" },
	{ id: "war", string: "Warrior" },
	{ id: "mrd", string: "Marauder" },
	{ id: "drk", string: "Dark Knight" },
	{ id: "gnb", string: "Gunbreaker" },
	{ id: "whm", string: "White Mage" },
	{ id: "cnj", string: "Conjurer" },
	{ id: "sch", string: "Scholar" },
	{ id: "ast", string: "Astrologian" },
	{ id: "sge", string: "Sage" },
	{ id: "mnk", string: "Monk" },
	{ id: "pgl", string: "Pugilist" },
	{ id: "drg", string: "Dragoon" },
	{ id: "lnc", string: "Lancer" },
	{ id: "nin", string: "Ninja" },
	{ id: "rog", string: "Rogue" },
	{ id: "sam", string: "Samurai" },
	{ id: "rpr", string: "Reaper" },
	{ id: "brd", string: "Bard" },
	{ id: "arc", string: "Archer" },
	{ id: "mch", string: "Machinist" },
	{ id: "dnc", string: "Dancer" },
	{ id: "blm", string: "Black Mage" },
	{ id: "thm", string: "Thaumaturge" },
	{ id: "smn", string: "Summoner" },
	{ id: "acn", string: "Arcanist" },
	{ id: "rdm", string: "Red Mage" },
	{ id: "blu", string: "Blue Mage" },
	{ id: "tank", string: "Tank" },
	{ id: "healer", string: "Healer" },
	{ id: "dps", string: "DPS" },
	{ id: "meleedps", string: "Melee DPS" },
	{ id: "rangeddps", string: "Physical Ranged DPS" },
	{ id: "casterdps", string: "Magic Ranged DPS" },
	{ id: "melee", string: "Melee" },
	{ id: "ranged", string: "Ranged" },
	{ id: "caster", string: "Caster" },
	{ id: "other", string: "Other" },
	// UI TEXT
	{ id: "dot-anchor", string: "DoT Anchor" },
	{ id: "buff-anchor", string: "Buff Anchor" },
	{ id: "raidbuffs-anchor", string: "Raidbuffs Anchor" },
	{ id: "mitigation-anchor", string: "Mitigations Anchor" },
	{ id: "party-anchor", string: "Party Anchor" },
	{ id: "customcd-anchor", string: "CustomCD Anchor" },
	{ id: "pulltimer", string: "Pulltimer" },
	// CONTEXT MENU
	{ id: "lock", string: "Lock/Unlock Bars" },
	{ id: "grid", string: "Toggle Grid" },
	{ id: "reload", string: "Reload" },
	{ id: "settings", string: "Settings" },
	{ id: "close", string: "Close" },
	// MESSAGES
	{ id: "jsonwarning", string: "Only import/export as JSON if you know what you're doing!" },
	{ id: "reloadoverlay", string: "Please reload overlay to finish clearing the settings and to receive the default settings." },
	{ id: "saveandclosewindow", string: "Do you want to save settings and close this window?" },
	{ id: "deleteallsettings", string: "Are you sure you want to delete all settings?" },
	{ id: "activesettingswindow", string: "There already seems to be an active settings window open. Do you want to close the previous window and open a new one?" },
	{ id: "currentsettingscopied", string: "Your current settings have been copied to your clipboard." },
	{ id: "importsettingsoverwrite", string: "Are you sure you want to import these settings? This will completely overwrite your previous settings!" },
	{ id: "invalidsettingsstring", string: "Invalid settings string, please doublecheck what you have pasted in." },
	{ id: "lockoverlay", string: "PLEASE LOCK THE OVERLAY IN ACT TO BE ABLE TO MOVE THE ANCHORS!" },
	{ id: "deleteprofile", string: "Are you sure you want to delete this profile?" },
	{ id: "experimentalsavesettings", string: "Experimental, this might cause issues. Export and save your settings." },
];
