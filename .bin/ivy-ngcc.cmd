@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\..\@angular\compiler-cli\ngcc\main-ivy-ngcc.js" %*
) ELSE (
  @SETLOCAL
  @SET PATHEXT=%PATHEXT:;.JS;=;%
  node  "%~dp0\..\@angular\compiler-cli\ngcc\main-ivy-ngcc.js" %*
)