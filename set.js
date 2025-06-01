/* if you're using pannel carefully edit this part

There's no need to configure this if you're deploying via Heroku — just set them in the environment variables.*/

const sessionName = 'session';
const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0JyQW9jL3ZFRnBsSzNwT3dTZ1Z4cFlZTnZBYmVQdjBZdWJuMzBGb3UzMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTStsTHFMT3VVK29jTFc4Rk93TlBKU3Z3QWQ3OTBoK0tZUTFXeUowR1QyVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLTjdqdzhCUC9Oak1xQnh3R29rNkp4b09WR0duWnhHbmF6TkR5RVg1SzE4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4eXpoc1hOeUVCeEZVZ2V1Y0kvYkFKR3lVZ2xyTFJGR2tLWWRvblVYbEhRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVMVXlSdklIZHFKSzI5OUROV2pTcWdhYzUwWm94cVg3ZTFERVJ6V2xwa3M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtKSVJ1RTZvOHdudEU0M2FGZWZsOGdsQy9Tb3dxcTBXcHVpcWlwOGFqUnM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEZFSlhyWGRIZisxMHBIb0ZHL0pKYldkT2c0Q1pHRHZnLy9CUS9RbFQxZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM2h2M2pYT0MyMEVEY3g0NWRHTk1PQ1pwU3UrKzdWSWdkUUJhbDdoZW0yND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilk1My9QM1h0UFVEeUJ0bE1TZEdDN1JiM1lXb0NpckZqeDI3U21meU9YaUtaRnVMWHNmT2dYcmx6Ylh5WFZtNnlCMURHcW8rS005MmJuQ2poT0lmQ0RBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDYsImFkdlNlY3JldEtleSI6Ik5UTm1IcGtXQUJSUjVoZ2RJUnFJenZ4OGJxSStMTEUvc1VVMEU3UGc4STA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiNTA5NTU0NDc3MDFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNjY0NTNDNDEwNDk0MzM5Q0Y4ODY4M0JFMDFBRjU5NEUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc0ODc0Nzk1OX0seyJrZXkiOnsicmVtb3RlSmlkIjoiNTA5NTU0NDc3MDFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRDIyNkRDREZGNDkwNkZDMkNDMkJFOUI2Q0M1QkE1NTMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc0ODc0Nzk3Nn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiUzExR0ozREMiLCJtZSI6eyJpZCI6IjUwOTU1NDQ3NzAxOjIyQHMud2hhdHNhcHAubmV0IiwibGlkIjoiNDY3MDgyODk0Nzg4NTI6MjJAbGlkIiwibmFtZSI6IvCfpJZCT1QgTVVMVElTRVJWSUNFUyDwn5Kv8J+Sr/Cfkq/wn5Kv8J+SryJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUER1NCtVQkVKZU43OEVHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiZi9jTGFVRi91dDdxemNZdzBZU1cyTzRNZ1lXTWJPWjNLYVNuV055a0VtMD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiWDNJMUgwY1p6ZERDa2JlTkFkUXoxVm1jckdZWjF2UXAyRE0yZG5udFRtTDB5cmFtWjVSS25ESkt0ZmMrd0cvUHd1SzRxajlTNzJDYzcrcGt5RFhuQlE9PSIsImRldmljZVNpZ25hdHVyZSI6IlZhRy9NeW1kNHZNZVVrTi83OFFZV3VIeStvcjJRZUJoZVM3UE1hL0hoT3hRZWdhNzRVbmtHZmVQakt2b0tDa0pRMWJWRGM4bFVSbE9UK3owMWFBTUJnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiNTA5NTU0NDc3MDE6MjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWC8zQzJsQmY3cmU2czNHTU5HRWx0anVESUdGakd6bWR5bWtwMWpjcEJKdCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FnSURRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQ4NzQ3OTQwLCJsYXN0UHJvcEhhc2giOiJubTNCYiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSStmIn0=';
const autobio = process.env.AUTOBIO || 'FALSE';
const autolike = process.env.AUTOLIKE_STATUS || 'TRUE';
const autoviewstatus = process.env.AUTOVIEW_STATUS || 'TRUE';
const welcomegoodbye = process.env.WELCOMEGOODBYE || 'true';
const prefix = process.env.PREFIX || '🇭🇹';
const appname = process.env.APP_NAME || 'elton';
const herokuapi = process.env.HEROKU_API;
const gptdm = process.env.GPT_INBOX || 'FALSE';
const mode = process.env.MODE || 'PUBLIC';
const anticall = process.env.AUTOREJECT_CALL || 'FALSE';
const botname = process.env.BOTNAME || '𝗥𝗔𝗩𝗘𝗡-𝗕𝗢𝗧';
const antibot = process.env.ANTIBOT || 'FALSE';
const author = process.env.STICKER_AUTHOR ||'ELTOM';
const packname = process.env.STICKER_PACKNAME || 'ELTON';
const antitag = process.env.ANTITAG || 'TRUE';
const dev = process.env.DEV || '50955447701';
const owner = dev.split(",");
const menulink = process.env.MENU_LINK || 'https://files.catbox.moe/duv8ac.jpg';
const menu = process.env.MENU_TYPE || 'VIDEO';
const badwordkick = process.env.BAD_WORD_KICK || 'FALSE';
const bad = process.env.BAD_WORD || 'fuck';
const autoread = process.env.AUTOREAD || 'TRUE';
const antidel = process.env.ANTIDELETE || 'TRUE';
const admin = process.env.ADMIN_MSG || '𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗿𝗲𝘀𝗲𝗿𝘃𝗲𝗱 𝗳𝗼𝗿 𝗔𝗱𝗺𝗶𝗻𝘀!';
const group = process.env.GROUP_ONLY_MSG || '𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗺𝗲𝗮𝗻𝘁 𝗳𝗼𝗿 𝗚𝗿𝗼𝘂𝗽𝘀!';
const botAdmin = process.env.BOT_ADMIN_MSG || '𝗜 𝗻𝗲𝗲𝗱 𝗔𝗱𝗺𝗶𝗻 𝗽𝗿𝗲𝘃𝗶𝗹𝗲𝗱𝗴𝗲𝘀!';
const NotOwner = process.env.NOT_OWNER_MSG || '𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗺𝗲𝗮𝗻𝘁 𝗳𝗼𝗿 𝘁𝗵𝗲 𝗼𝘄𝗻𝗲𝗿!';
const wapresence = process.env.WA_PRESENCE || 'recording';
const antilink = process.env.ANTILINK || 'TRUE';
const mycode = process.env.CODE || '254';
const antiforeign = process.env.ANTIFOREIGN || 'TRUE';
const port = process.env.PORT || 8080;
const antilinkall = process.env.ANTILINK_ALL || 'TRUE';

module.exports = { session, sessionName, autobio, author, packname, dev, owner, badwordkick, bad, mode, group, NotOwner, botname, botAdmin, antiforeign, menu, menulink, autoread, antilink, admin, mycode, antilinkall, anticall, antitag, antidel, wapresence, welcomegoodbye, antibot, herokuapi, prefix, port, gptdm, appname, autolike, autoviewstatus };  
