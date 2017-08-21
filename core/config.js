module.exports = {
  // Config for database, only support mysql.
  db: {
    username: "root",
    password: 'faux1337',
    database: "codepush",
    host: "127.0.0.1",
    port: 3306,
    dialect: "mysql",
    logging: false
  },
  // Config for local storage when storageType value is "local".
  local: {
    // Binary files storage dir, Do not use tmpdir and it's public download dir.
    storageDir: process.env.STORAGE_DIR || "/Users/johnculviner/TGT/code-push-server/data",
    // Binary files download host address which Code Push Server listen to. the files storage in storageDir.
    downloadUrl: process.env.LOCAL_DOWNLOAD_URL || "http://localhost:3000/download",
    // public static download spacename.
    public: process.env.PUBLIC || '/download'
  },
  jwt: {
    // Recommended: 63 random alpha-numeric characters
    // Generate using: https://www.grc.com/passwords.htm
    tokenSecret: process.env.TOKEN_SECRET ||'uFZt4NGlyMDqyxH3HjNkzP5nG5ZflioqihpmChVaFjgSEK7Fzuxp8aStyD9irUQ'
  },
  common: {
    // CodePush Web(https://github.com/lisong/code-push-web) login address.
    codePushWebUrl: "http://localhost:3001/login",
    // create patch updates's number. default value is 3
    diffNums: 3,
    // data dir for caclulate diff files. it's optimization.
    dataDir: process.env.DATA_DIR || "/Users/johnculviner/TGT/code-push-server/diff",
    // storageType which is your binary package files store. options value is ("local" | "qiniu" | "s3")
    storageType: process.env.STORAGE_TYPE || "local",
    // options value is (true | false), when it's true, it will cache updateCheck results in redis.
    updateCheckCache: false
  },
  // Config for smtp email，register module need validate user email project source https://github.com/nodemailer/nodemailer
  smtpConfig:{
    host: "smtp.aliyun.com",
      port: 465,
      secure: true,
      auth: {
      user: "",
        pass: ""
    }
  },
  log4js: {
    appenders: [
      { type: 'console'}
    ],
      levels : {
      "[all]": "ERROR",
        "startup": "INFO",
        "http" : "INFO"
    }
  }
}