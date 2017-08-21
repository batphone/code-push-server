[2017-08-21 14:39:09.463] [INFO] startup - Listening on port 3000

# NOT SURE
```
[2017-08-21 14:39:34.426] [INFO] http - ::1 - - "POST /reportStatus/deploy HTTP/1.1" 200 2 "" "BatphoneBeta/78 CFNetwork/808.2.16 Darwin/15.6.0"
[2017-08-21 14:41:48.847] [INFO] http - ::1 - - "POST /reportStatus/deploy HTTP/1.1" 200 2 "" "BatphoneBeta/78 CFNetwork/808.2.16 Darwin/15.6.0"
```

# Do staging release
```
[2017-08-21 14:44:08.297] [INFO] http - ::ffff:127.0.0.1 - - "GET /apps/studioconnect-ios/deployments/Staging HTTP/1.1" 200 55 "" "node-superagent/1.8.5"
[2017-08-21 14:44:33.505] [INFO] http - ::ffff:127.0.0.1 - - "GET /authenticated HTTP/1.1" 200 22 "" "node-superagent/1.8.5"
[2017-08-21 14:44:33.966] [INFO] http - undefined - - "POST /apps/studioconnect-ios/deployments/Staging/release HTTP/1.1" 200 0 "" "node-superagent/1.8.5"
```

# Update process
## Check for update
```
[2017-08-21 14:48:01.281] [INFO] http - ::1 - - "GET /updateCheck?deploymentKey=Hr9McvtJ9hhLLRz0yLmrKezMBnLI4ksvOXqog&appVersion=0.27.0&packageHash=ce2b8b520010e71fd9457cce0325953f35f24223e8ed9fb4157a2a0f93061dbc&isCompanion=&label=&clientUniqueId=A509D774-2CD5-43DE-93AC-4944EB2D1115 HTTP/1.1" 200 424 "" "BatphoneBeta/78 CFNetwork/808.2.16 Darwin/15.6.0"
```

## found an update, download it 
```
[2017-08-21 14:48:01.314] [INFO] http - ::1 - - "GET /download/fh/Fhxy5dJpJIgYn-Si-NTF6HfPot0c HTTP/1.1" 200 1799724 "" "BatphoneBeta/78 CFNetwork/808.2.16 Darwin/15.6.0"
[2017-08-21 14:48:01.384] [INFO] http - ::1 - - "POST /reportStatus/download HTTP/1.1" 200 2 "" "BatphoneBeta/78 CFNetwork/808.2.16 Darwin/15.6.0"
[2017-08-21 14:48:01.645] [INFO] http - ::1 - - "POST /reportStatus/deploy HTTP/1.1" 200 2 "" "BatphoneBeta/78 CFNetwork/808.2.16 Darwin/15.6.0"
```

## another staging release
```
[2017-08-21 14:51:13.751] [INFO] http - ::ffff:127.0.0.1 - - "GET /apps/studioconnect-ios/deployments/Staging HTTP/1.1" 200 55 "" "node-superagent/1.8.5"
[2017-08-21 14:51:37.630] [INFO] http - ::ffff:127.0.0.1 - - "GET /authenticated HTTP/1.1" 200 22 "" "node-superagent/1.8.5"
[2017-08-21 14:51:37.959] [INFO] http - undefined - - "POST /apps/studioconnect-ios/deployments/Staging/release HTTP/1.1" 200 0 "" "node-superagent/1.8.5"
[2017-08-21 14:51:40.192] [INFO] http - undefined - - "GET /download/fj/FjI2w1-tpaoODTzF4tKqzB0-H1d9 HTTP/1.1" 200 2706 "" "undefined"
```

# Update process
## Check for update
```
[2017-08-21 14:52:55.439] [INFO] http - ::1 - - "GET /updateCheck?deploymentKey=Hr9McvtJ9hhLLRz0yLmrKezMBnLI4ksvOXqog&appVersion=0.27.0&packageHash=811b2e7a065c52174b597c711df4836d204ef8a88d533c064006434e2b485ffd&isCompanion=&label=v1&clientUniqueId=A509D774-2CD5-43DE-93AC-4944EB2D1115 HTTP/1.1" 200 423 "" "BatphoneBeta/78 CFNetwork/808.2.16 Darwin/15.6.0"
```
## Got and update
```
[2017-08-21 14:52:55.479] [INFO] http - ::1 - - "GET /download/fi/Fibej7-sZjVojbL04o2lvRpPGLGe HTTP/1.1" 200 374350 "" "BatphoneBeta/78 CFNetwork/808.2.16 Darwin/15.6.0"
[2017-08-21 14:52:55.551] [INFO] http - ::1 - - "POST /reportStatus/download HTTP/1.1" 200 2 "" "BatphoneBeta/78 CFNetwork/808.2.16 Darwin/15.6.0"
[2017-08-21 14:52:55.846] [INFO] http - ::1 - - "POST /reportStatus/deploy HTTP/1.1" 200 2 "" "BatphoneBeta/78 CFNetwork/808.2.16 Darwin/15.6.0"
```

[2017-08-21 14:52:55.868] [INFO] http - ::1 - - "GET /updateCheck?deploymentKey=Hr9McvtJ9hhLLRz0yLmrKezMBnLI4ksvOXqog&appVersion=0.27.0&packageHash=06c7036802db83ff209e19182895c15665a8cf53077e744940ba5f6f02199ddb&isCompanion=&label=v2&clientUniqueId=A509D774-2CD5-43DE-93AC-4944EB2D1115 HTTP/1.1" 200 229 "" "BatphoneBeta/78 CFNetwork/808.2.16 Darwin/15.6.0"
[2017-08-21 15:03:53.690] [INFO] http - ::ffff:127.0.0.1 - - "GET /apps HTTP/1.1" 200 179 "" "node-superagent/1.8.5"
[2017-08-21 15:04:17.002] [INFO] http - ::ffff:127.0.0.1 - - "GET /apps/studioconnect-ios/deployments/Production HTTP/1.1" 200 55 "" "node-superagent/1.8.5"
[2017-08-21 15:04:42.301] [INFO] http - ::ffff:127.0.0.1 - - "GET /authenticated HTTP/1.1" 200 22 "" "node-superagent/1.8.5"
[2017-08-21 15:04:42.672] [INFO] http - undefined - - "POST /apps/studioconnect-ios/deployments/Production/release HTTP/1.1" 200 0 "" "node-superagent/1.8.5"
[2017-08-21 15:07:46.210] [INFO] http - ::1 - - "GET /updateCheck?deploymentKey=Hr9McvtJ9hhLLRz0yLmrKezMBnLI4ksvOXqog&appVersion=0.27.0&packageHash=06c7036802db83ff209e19182895c15665a8cf53077e744940ba5f6f02199ddb&isCompanion=&label=v2&clientUniqueId=A509D774-2CD5-43DE-93AC-4944EB2D1115 HTTP/1.1" 304 - "" "BatphoneBeta/78 CFNetwork/808.2.16 Darwin/15.6.0"
[2017-08-21 15:09:02.445] [INFO] http - ::1 - - "GET /updateCheck?deploymentKey=Hr9McvtJ9hhLLRz0yLmrKezMBnLI4ksvOXqog&appVersion=0.27.0&packageHash=06c7036802db83ff209e19182895c15665a8cf53077e744940ba5f6f02199ddb&isCompanion=&label=v2&clientUniqueId=A509D774-2CD5-43DE-93AC-4944EB2D1115 HTTP/1.1" 304 - "" "BatphoneBeta/78 CFNetwork/808.2.16 Darwin/15.6.0"
