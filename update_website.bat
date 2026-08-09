@echo off
color 0A
echo ===================================================
echo      Habesha Restaurant - Website Updater
echo ===================================================
echo.

:: Check if git is installed
git --version >nul 2>&1
if %errorlevel% neq 0 (
    color 0C
    echo [ERROR] Git is not installed on your computer.
    echo To use this simple updater, you need to download and install Git.
    echo Get it here: https://git-scm.com/downloads
    echo.
    pause
    exit /b
)

:: Fix for "dubious ownership" error in OneDrive folders
git config --global --add safe.directory "C:/Users/pc/OneDrive/Documents/WEBSITE/HABESHA  Restorant DE"

echo [1/3] Gathering updated files...
git add .

echo [2/3] Saving changes...
git commit -m "Automatic website update"

echo [3/3] Uploading to GitHub...
git push origin main

echo.
echo ===================================================
echo   SUCCESS! Your website will be live in 1-2 minutes.
echo ===================================================
pause
