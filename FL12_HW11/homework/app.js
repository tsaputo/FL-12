const structure = [
  {
    'folder': true,
    'title': 'Films',
    'children': [
      {
        'title': 'Iron Man.avi'
      },
      {
        'folder': true,
        'title': 'Fantasy',
        'children': [
          {
            'title': 'The Lord of the Rings.avi'
          },
          {
            'folder': true,
            'title': 'New folder 1',
            'children': false
          }
        ]
      }
    ]
  },
  {
    'folder': true,
    'title': 'Documents',
    'children': [
      {
        'folder': true,
        'title': 'EPAM Homework answers',
        'children': null
      }
    ]
  }
];

const rootNode = document.getElementById('root');

// Todo: your code goes here

createTree(rootNode, structure);

function createTree(parentNode, structure) {
  const folderIcon = `<i class='material-icons folder'>folder</i>`;
  const folderOpenIcon = `<i class='material-icons folder'>folder_open</i>`;
  const fileIcon = `<i class='material-icons file'>insert_drive_file</i>`;

  const ul = document.createElement('ul');
  const wrapperNode = parentNode.appendChild(ul);

  
  for (let i = 0; i < structure.length; i++) {
    const li = document.createElement('li');
    if (structure[i].folder) {
      wrapperNode.appendChild(li);
      const span = document.createElement('span');
      span.innerHTML = `${folderIcon} ${structure[i].title}`;

      span.onclick = () => {
        let children = span.nextSibling;

        if (children.style.display === 'block') {
          span.innerHTML = `${folderIcon} ${structure[i].title}`;
          children.style.display = 'none';
        } else {
          span.innerHTML = `${folderOpenIcon} ${structure[i].title}`;
          children.style.display = 'block';
        }
      }
      li.appendChild(span);

      if (structure[i].children) {
        createTree(li, structure[i].children);
      } else {
        const noFiles = document.createElement('span');
        noFiles.className = 'emptyFolder';
        noFiles.innerHTML = `Folder is empty`;
        noFiles.style.display = 'none';
        li.appendChild(noFiles);
      }
    } else {
      wrapperNode.appendChild(li);
      li.innerHTML = `<span> ${fileIcon} ${structure[i].title}</span>`;
    }
  }
}


