#!C:\Users\w909781\Documents\z_CodePractice\Python\projects\django-env\Scripts\python.exe
# EASY-INSTALL-ENTRY-SCRIPT: 'pip==18.0','console_scripts','pip3.7'
__requires__ = 'pip==18.0'
import re
import sys
from pkg_resources import load_entry_point

if __name__ == '__main__':
    sys.argv[0] = re.sub(r'(-script\.pyw?|\.exe)?$', '', sys.argv[0])
    sys.exit(
        load_entry_point('pip==18.0', 'console_scripts', 'pip3.7')()
    )
