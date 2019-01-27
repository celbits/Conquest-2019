@echo off
for /f "tokens=*" %%a in (media_partner.txt) do (
  googleimagesdownload --keywords %%a --limit 1 --a square
)
pause