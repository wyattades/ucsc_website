rsync -avz -e "ssh" --exclude=.git --exclude=transfer.sh . ucsc:~/public_html
