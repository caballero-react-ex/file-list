import React from 'react';
import './FileListItem.css';
import FileName from './FileName';
import Commit from './Commit';
import Time from './Time';

function FileListItem({data}) {
  console.log(data.latestCommit.message)
  return (
    <div className="file-list-item flex">
      <FileName name={data.name} icon={data.type}/>
      <Commit commit={data.latestCommit.message} />
      <Time />
    </div>
  )
}

export default FileListItem;