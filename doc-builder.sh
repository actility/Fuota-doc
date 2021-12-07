#!/bin/bash
set -e
CURRENT_DIR=$(pwd)

reg='\./(.*)/content/.*'

PACKAGE_DIR=${CURRENT_DIR}/src/.vuepress/dist



# install vuepress
if ! [ -x "$(command -v vuepress)" ]; then
                  echo 'vuepress is not installed, the build will not proceed.'
                            npm install -g vuepress
                                fi




if [ -d "$PACKAGE_DIR" ]
then
   echo "Folder $PACKAGE_DIR exists => remove folder"
   rm -rf ${PACKAGE_DIR}
fi

echo "Create destination folder $PACKAGE_DIR"
mkdir -p ${PACKAGE_DIR}

echo "Install vuepress"

yarn global add vuepress
yarn add vuepress-theme-actility@6.8.0


echo "Build project"

vuepress build src


ARCHIVE_NAME=thingpark-fuota_doc.tar.gz
TARGET_DIR=./target

if [ -d "$TARGET_DIR" ]
then
            echo "Folder $TARGET_DIR exists => remove folder"
            rm -rf ${TARGET_DIR}
fi

echo "Create target directory $TARGET_DIR"

mkdir -p ${TARGET_DIR}

echo "Packaging archive ${ARCHIVE_NAME}"
tar czvf ${TARGET_DIR}/${ARCHIVE_NAME} -C ${PACKAGE_DIR} .
echo "Archive was created $TARGET_DIR/$ARCHIVE_NAME"