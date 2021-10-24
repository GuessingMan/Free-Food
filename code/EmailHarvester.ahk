^l::
Loop{
KeyWait, Ctrl
Click, 500 325
Sleep, 1000
Send, #{PrintScreen}
Sleep, 1000
Click, 350 200
Sleep, 1000
Click 500 325, Right
Sleep, 1000
Click 740 588
Sleep, 1000
IfWinExist chrome.exe 
	{ 
	WinActivate
	
       }
}
return

Esc::ExitApp

^p::
Run, https://www.google.com/
return

^t::
KeyWait, Ctrl
Click, 500 325
Sleep, 1000
Send, #{PrintScreen}
return
