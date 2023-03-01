function checkPayeerID() {
    const payeerID = document.getElementById("payeer-id").value.trim();
    if (payeerID.length === 0 || payeerID.substring(0, 1) !== "P") {
      alert("Please enter a valid Payeer ID starting with 'P'.");
    } else {
      // hide input field
      document.getElementById("payeer-id").style.display = "none";
      // show history wall and move it up
      const historyDiv = document.getElementById("history");
      historyDiv.style.display = "block";
      historyDiv.style.marginTop = "-80px";
      // fetch history data
      fetch(`https://api.attackruble.com/history?payeer_id=${payeerID}`)
        .then(response => response.json())
        .then(data => {
          const historyBody = document.getElementById("history-body");
          historyBody.innerHTML = "";
          data.forEach(row => {
            const tr = document.createElement("tr");
            const date = new Date(row.timestamp);
            const dateString = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
            const timeString = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
            tr.innerHTML = `
              <td>${dateString}</td>
              <td>${timeString}</td>
              <td>${row.amount}</td>
              <td>${row.pending}</td>
            `;
            historyBody.appendChild(tr);
          });
        })
        .catch(error => console.error(error));
    }
  }
  