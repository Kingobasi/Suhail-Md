const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347049265128";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_15_06_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDczLFxuICAgICAgICAyMDksXG4gICAgICAgIDg5LFxuICAgICAgICA2NixcbiAgICAgICAgNTQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDk4LFxuICAgICAgICAyOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTUwLFxuICAgICAgICA1NCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDY3LFxuICAgICAgICA4NyxcbiAgICAgICAgMjM1LFxuICAgICAgICA5MCxcbiAgICAgICAgMjAwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTcyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDkyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNDksXG4gICAgICAgIDE1OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTE5LFxuICAgICAgICA2MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDk5LFxuICAgICAgICA4MixcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICA5MixcbiAgICAgICAgMTI1LFxuICAgICAgICA1MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDYyLFxuICAgICAgICA2MyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTUxLFxuICAgICAgICA0MSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDgwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDQxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjksXG4gICAgICAgIDE4MixcbiAgICAgICAgMjM5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDUyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDY2LFxuICAgICAgICAyOSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA3LFxuICAgICAgICA1NixcbiAgICAgICAgMjM0LFxuICAgICAgICAyNCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTcsXG4gICAgICAgIDAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDQ3LFxuICAgICAgICA5NixcbiAgICAgICAgMTEwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDY5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDQyLFxuICAgICAgICAyMDksXG4gICAgICAgIDM4LFxuICAgICAgICA5MSxcbiAgICAgICAgMzksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTA4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICA2OCxcbiAgICAgICAgMTM0LFxuICAgICAgICAzMyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxODMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMzksXG4gICAgICAgIDExMixcbiAgICAgICAgMjEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDYwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjksXG4gICAgICAgIDI3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjA5LFxuICAgICAgICA4NyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjUzLFxuICAgICAgICA0OCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDk3LFxuICAgICAgICAxLFxuICAgICAgICA1NyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMTksXG4gICAgICAgIDU1LFxuICAgICAgICAwLFxuICAgICAgICAxNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMyxcbiAgICAgICAgODMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjIxLFxuICAgICAgICA4MyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA4NixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDEyN1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEyMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjA5LFxuICAgICAgICAzNixcbiAgICAgICAgMjI2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTIyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDgyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDg2LFxuICAgICAgICAzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDgwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDYxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTk2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI3LFxuICAgICAgICA0NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA0NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjU0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxODMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTY3LFxuICAgICAgICA4OSxcbiAgICAgICAgMTgyLFxuICAgICAgICA3NyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTYyLFxuICAgICAgICA0MixcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIwNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJMUlFlVnF5SVo4UkNxaGFRQUJGWTFLZC83a0JheVhGaUtyYWFUNjE2TGNnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJQT0lNSTJUMVNuV0RXSEo3dXdhLW53XCIsXG4gIFwicGhvbmVJZFwiOiBcIjFiNjViZTc2LWU1ZWMtNDhmZi1hYWY2LWI4YjJkMWQ3NTg5Y1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjMsXG4gICAgICAxMDAsXG4gICAgICA5NyxcbiAgICAgIDI1MyxcbiAgICAgIDQzLFxuICAgICAgODcsXG4gICAgICA5MyxcbiAgICAgIDk0LFxuICAgICAgMTA4LFxuICAgICAgMTc2LFxuICAgICAgMTg2LFxuICAgICAgOTMsXG4gICAgICA3NCxcbiAgICAgIDEwNixcbiAgICAgIDE0OSxcbiAgICAgIDI0NCxcbiAgICAgIDc0LFxuICAgICAgOTQsXG4gICAgICAxNTksXG4gICAgICAyMTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTcwLFxuICAgICAgMTg3LFxuICAgICAgMjE2LFxuICAgICAgMzUsXG4gICAgICAxODUsXG4gICAgICAzNCxcbiAgICAgIDcxLFxuICAgICAgMjAxLFxuICAgICAgMjUzLFxuICAgICAgMTA2LFxuICAgICAgMTU1LFxuICAgICAgMTMzLFxuICAgICAgMTM0LFxuICAgICAgNzIsXG4gICAgICAxNDIsXG4gICAgICAyMDksXG4gICAgICAxMDcsXG4gICAgICA3OSxcbiAgICAgIDIxNSxcbiAgICAgIDE5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkFSREE5WUxBXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDQ5MjY1MTI4OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJLaW5nIEVtbWFudWVsIE9iYXNpXCIsXG4gICAgXCJsaWRcIjogXCIyNzM3MjI5NjM0MjMzMTg6M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPSzMyZUFKRU16NmtMTUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIldWMXB2WkxsSkRTZld2RmxmZUpjNk1QOFJEcnB5Mkx3SGFqQVJLRVlxaFU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiajlhWG9JZS94WjJvNEQ4Z284bGp2VFhwTWFRVnVxNU1tL09acTJBVUVGNHZjUGpMeXR1cmpnSHJhWnFmNUw4QUM0MWtKc0hRMGR4N3h0REFQQkl1Z1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwib1Njc1RVU2tZOU03T01CVnM5d0lUZG9tNTA0Z1BndXlnc3UvWDNYRXpjSVkxMC8ySkxib1c5RW5FNHpJc3JaZ1ZEQkRBRzQ4UjdCMHlLenZmSWJrakE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA0OTI2NTEyODozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODksXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJpXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTc4NDUzMjksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGRDNcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZEMy5qc29uIjogIntcImtleURhdGFcIjpcInowQjN4U0dkalVGWVlYVUdLdWcvMDgvdlFlNVBUN0tNVVErWmNHT0tZRkE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjYxODcxMTAxMCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE3ODQ1MzMzOTU3XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
