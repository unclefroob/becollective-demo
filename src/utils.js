export const fetchData = () => {
  const output = new Promise(resolve =>
    fetch("https://dev21.becollective.com/api/v2/coding-challenges/dirs")
      .then(res => {
        resolve(res.json());
      })
      .catch(err => {
        console.log(`error: ${err}`);
      })
  );
  return output;
};

export const findFiles = data => {
  let files = 0;
  let fileSize = 0;
  data.forEach(sub => {
    if (sub.children) {
      sub.children.forEach(c => {
        if (c.type === "file") {
          files += 1;
          fileSize += c.size;
        } else {
          const foundFiles = findFiles(c.children);
          files += foundFiles.files;
          fileSize += foundFiles.fileSize;
        }
      });
    } else if (sub.type === "file") {
      files += 1;
      fileSize += sub.size;
    }
  });
  return { files, fileSize };
};

export const styleFileSize = (bytes, decimals = 2) => {
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB"];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
};
