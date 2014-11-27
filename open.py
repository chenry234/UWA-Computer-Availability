import webbrowser
import urllib2
# import create_server.py

#Grabbing the library website
librarywebsitehtml = urllib2.urlopen("http://www.library.uwa.edu.au").read()

with open('libWebsite.html', 'w') as website:
	website.write(librarywebsitehtml)

webbrowser.open_new_tab("http://0.0.0.0:8000/")
import create_server
