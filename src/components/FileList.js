import React from 'react';
import './FileList.css';
import FileListItem from './FileListItem';
import testFiles from './TestFiles';


function FileList() {
  return (
    <div className="file-list">
      {testFiles.map(fileItem => (
        <FileListItem data={fileItem} key={fileItem.id} />
      ))}
    </div>
  )
}

export default FileList;