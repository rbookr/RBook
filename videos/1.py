import os
import subprocess
import json

def create_share_link(_path):
    response = subprocess.check_output('rclone link ' + _path, shell=True)
    share_link = response.decode('utf-8')
    return share_link

def create_short_link(raw): 
    pass

def get_folder_items(path):
    response = subprocess.check_output('rclone lsjson "' + path+'"', shell=True)
    return json.loads(response.decode('utf-8'))

def folder_loop(base):
    # 当前目录信息
    par_path = os.path.dirname(base)
    fpath = os.path.basename(base)
    folder_items = get_folder_items(base)

    # 先进行子文件夹循环
    item_subfolders = list(filter(lambda x: x.get('IsDir') == True, folder_items))
    for subfloder in item_subfolders:
        folder_loop(os.path.join(base, subfloder.get('Path')))

    # 其他文件
    items = list(filter(lambda x:x not in item_subfolders, folder_items))
    for item in items:
        full_path = os.path.join(base, item.get('Path'))
        print(full_path)
        #share_link = create_share_link(full_path)
        #short_link = create_short_link(share_link)
        #print(full_path, share_link, short_link)
        
base = "onedrive:RainboyVideo"
folder_loop(base)
