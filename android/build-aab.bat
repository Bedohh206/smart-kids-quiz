@echo off
echo Building Smart Kids Quiz Android App Bundle...
echo.

REM Set Java Home to Android Studio JBR
set "JAVA_HOME=C:\Program Files\Android\Android Studio\jbr"
set "PATH=%JAVA_HOME%\bin;%PATH%"

echo Java Home set to: %JAVA_HOME%
echo.

REM Optional: Set keystore passwords (uncomment and replace with your passwords)
REM set KEYSTORE_PASSWORD=your_keystore_password
REM set KEY_PASSWORD=your_key_password

echo Starting Gradle build...
echo This may take 2-5 minutes on first run...
echo.

REM Navigate to android directory
cd /d "%~dp0"

REM Build the bundle
call gradlew.bat bundleRelease

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ===================================
    echo BUILD SUCCESSFUL!
    echo ===================================
    echo.
    echo Your .aab file is ready at:
    echo app\build\outputs\bundle\release\app-release.aab
    echo.
    if exist "app\build\outputs\bundle\release\app-release.aab" (
        for %%F in ("app\build\outputs\bundle\release\app-release.aab") do echo File size: %%~zF bytes
    )
) else (
    echo.
    echo ===================================
    echo BUILD FAILED
    echo ===================================
    echo Check the error messages above
)

echo.
pause
