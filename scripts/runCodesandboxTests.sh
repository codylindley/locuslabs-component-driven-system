#!/bin/bash
# the following causes any failure to abort the script
set -eu

filePaths=`find 'ui_components/MOD' -type f -name "package.json" -not -path "*/node_modules/*" -not -path "*/themes/*"`

filePathsString=`echo $filePaths | sed 's/ /;/g'` #replace spaces with ';'

cypress run --browser chrome --headless --config testFiles='codesandbox/codesandbox.spec.js' --env filePaths=$filePathsString
