let task_list = JSON.parse(localStorage.getItem("data")) || [{ "Task": "abcd", "status": false }, { "Task": "ad", "status": true }, { "Task": "ab", "status": true }]

function reload_data(task_data) {
  if (task_data.length) {
    for (task of task_data) {
      console.log(task)
      let class_name = task.status ? "task_not_completed" : "task_completed"
      let p_class = task.status ? "" : "p_completed"
      let edit_calss = task.status ? "edit_data" : "disable_edit"
      $("#display_task").append(`<section><p class=${p_class}>${task.Task}</p><div><button class="delete_button">Delete</button><button class=${class_name}>${task.status ? "Complete" : "Completed"}</button><button class=${edit_calss}>Edit</button> <button style="display: none;" class='save_data'>Save</button></div></section>`)

      $(".delete_button").click(function () {
        $(this).parent().parent().remove()
        for (let i = 0; i < task_list.length; i++) {
          if (task_list[i].Task === $(this).parent().parent().find("p")[0].innerText) {
            task_list.splice(i, 1)
            console.log(i)
            break;
          }
        }
        localStorage.setItem("data", JSON.stringify(task_data));
      })

      let task_detail = '';
      $(".edit_data").click(function () {
        task_detail = $(this).parent().parent().find("p")[0].innerText

        console.log(task_detail)
        $(this).parent().parent().find("p").replaceWith(`<input type=text value=${task_detail} />`)
        $(this).hide()
        console.log($(this).parent().find(".save_data"))
        $(this).parent().find(".save_data").show()
        // localStorage.setItem("data", JSON.stringify(task_list))
      })

      $(".save_data").click(function () {
        let task_save = $(this).parent().parent().find("input")[0].value
        console.log(task_save)
        for (let i = 0; i < task_list.length; i++) {
          if (task_list[i].Task === task_detail) {
            task_list[i].Task = task_save
            console.log(i)
            break;
          }
        }
        $(this).parent().parent().find("input").replaceWith(`<p>${task_save}</p>`)
        $(this).hide()
        $(this).parent().find(".edit_data").show()
        localStorage.setItem("data", JSON.stringify(task_list));
      })

      $(".task_not_completed").click(function () {
        $(this).html("Completed")
        $(this).css({ "backgroundColor": "rgba(20, 45, 76, 0.5)", "cursor": "none" })
        $(this).parent().parent().find("p").css({ "textDecorationLine": "line-through", "color": "rgba(0,0,0,0.6)" })
        for (let i = 0; i < task_list.length; i++) {
          if (task_list[i].Task === $(this).parent().parent().find("p")[0].innerText) {
            task_list[i].status = false
            console.log(i)
            break;
          }
          // console.log(task_list[i].Task)
        }
        $(this).parent().find(".edit_data").css({ "backgroundColor": "rgba(20, 45, 76, 0.5)", "cursor": "none" })
        $(this).parent().find(".edit_data").prop("disabled", "true")
        // status = false
        localStorage.setItem("data", JSON.stringify(task_list));
      })

      // $("section").click(function () {
      //   if (task.status) {
      //     console.log($(this).children()[0])
      //     $(this).children().children(".task_not_completed").css({ "backgroundColor": "rgba(20, 45, 76, 0.5)", "cursor": "none" })
      //     $(this).children("p").css({ "textDecorationLine": "line-through", "color": "rgba(0,0,0,0.6)" })
      //   }
      // })
    }
  }
}

reload_data(task_list)

$("#add_button").on('click', function (e) {
  // task_list.push($("#addTask"))
  // console.log(e)
  console.log($("#addTask")[0].value)
  let data = $("#addTask")[0].value
  let status = true
  if (data) {
    $("#addTask")[0].value = ""
    $("#display_task").append(`<section><p>${data}</p><div><button class="delete_button">Delete</button><button class="task_not_completed">Complete</button><button class='edit_data'>Edit</button> <button style="display: none;" class='save_data'>Save</button></div></section>`)

    $(".delete_button").click(function () {
      $(this).parent().parent().remove()
      for (let i = 0; i < task_list.length; i++) {
        if (task_list[i].Task === $(this).parent().parent().find("p")[0].innerText) {
          task_list.splice(i, 1)
          console.log(i)
          break;
        }
        // console.log(task_list[i].Task)
      }
      // console.log($(this).parent().parent().find("p")[0].innerText)
      // console.log($(this))
      localStorage.setItem("data", JSON.stringify(task_list));
    })

    $(".task_not_completed").click(function () {
      $(this).html("Completed")
      $(this).css({ "backgroundColor": "rgba(20, 45, 76, 0.5)", "cursor": "none" })
      $(this).parent().parent().find("p").css({ "textDecorationLine": "line-through", "color": "rgba(0,0,0,0.6)" })
      for (let i = 0; i < task_list.length; i++) {
        if (task_list[i].Task === $(this).parent().parent().find("p")[0].innerText) {
          task_list[i].status = false
          console.log(i)
          break;
        }
        // console.log(task_list[i].Task)
      }
      $(this).parent().find(".edit_data").css({ "backgroundColor": "rgba(20, 45, 76, 0.5)", "cursor": "none" })
      $(this).parent().find(".edit_data").prop("disabled", "true")
      // status = false
      localStorage.setItem("data", JSON.stringify(task_list));
    })

    let task_detail = '';
    $(".edit_data").click(function () {
      task_detail = $(this).parent().parent().find("p")[0].innerText

      console.log(task_detail)
      $(this).parent().parent().find("p").replaceWith(`<input type=text value=${task_detail} />`)
      $(this).hide()
      console.log($(this).parent().find(".save_data"))
      $(this).parent().find(".save_data").show()
      // localStorage.setItem("data", JSON.stringify(task_list));
    })

    $(".save_data").click(function () {
      let task_save = $(this).parent().parent().find("input")[0].value
      console.log(task_save)
      for (let i = 0; i < task_list.length; i++) {
        if (task_list[i].Task === task_detail) {
          task_list[i].Task = task_save
          console.log(i)
          break;
        }
      }
      $(this).parent().parent().find("input").replaceWith(`<p>${task_save}</p>`)
      $(this).hide()
      $(this).parent().find(".edit_data").show()
      localStorage.setItem("data", JSON.stringify(task_list));
    })

    // $("section").click(function () {
    //   console.log($(this).children()[0])
    //   $(this).children().children(".task_not_completed").css({ "backgroundColor": "rgba(20, 45, 76, 0.5)", "cursor": "none" })
    //   $(this).children("p").css({ "textDecorationLine": "line-through", "color": "rgba(0,0,0,0.6)" })
    //   status = false
    //   console.log(task_list)
    // })
    task_list.push({ "Task": data, status })
  }
  console.log(task_list)
  localStorage.setItem("data", JSON.stringify(task_list));
})

$("#addTask").on('keypress', function (e) {
  if (e.which == 13) {
    console.log($("#addTask")[0].value)
    let data = $("#addTask")[0].value
    let status = true
    if (data) {
      $("#addTask")[0].value = ""
      $("#display_task").append(`<section><p>${data}</p><div><button class="delete_button">Delete</button><button class="task_not_completed">Complete</button><button class='edit_data'>Edit</button> <button style="display: none;" class='save_data'>Save</button></div></section>`)

      $(".delete_button").click(function () {
        $(this).parent().parent().remove()
        for (let i = 0; i < task_list.length; i++) {
          if (task_list[i].Task === $(this).parent().parent().find("p")[0].innerText) {
            task_list.splice(i, 1)
            console.log(i)
            break;
          }
        }
        localStorage.setItem("data", JSON.stringify(task_list));
      })

      $(".task_not_completed").click(function () {
        $(this).html("Completed")
        $(this).css({ "backgroundColor": "rgba(20, 45, 76, 0.5)", "cursor": "none" })
        $(this).parent().parent().find("p").css({ "textDecorationLine": "line-through", "color": "rgba(0,0,0,0.6)" })
        for (let i = 0; i < task_list.length; i++) {
          if (task_list[i].Task === $(this).parent().parent().find("p")[0].innerText) {
            task_list[i].status = false
            console.log(i)
            break;
          }
          // console.log(task_list[i].Task)
        }
        $(this).parent().find(".edit_data").css({ "backgroundColor": "rgba(20, 45, 76, 0.5)", "cursor": "none" })
        $(this).parent().find(".edit_data").prop("disabled", "true")
        // status = false
        localStorage.setItem("data", JSON.stringify(task_list));
      })

      let task_detail = '';
      $(".edit_data").click(function () {
        task_detail = $(this).parent().parent().find("p")[0].innerText

        console.log(task_detail)
        $(this).parent().parent().find("p").replaceWith(`<input type=text value=${task_detail} />`)
        $(this).hide()
        console.log($(this).parent().find(".save_data"))
        $(this).parent().find(".save_data").show()
        // localStorage.setItem("data", JSON.stringify(task_list));
      })

      $(".save_data").click(function () {
        let task_save = $(this).parent().parent().find("input")[0].value
        console.log(task_save)
        for (let i = 0; i < task_list.length; i++) {
          if (task_list[i].Task === task_detail) {
            task_list[i].Task = task_save
            console.log(i)
            break;
          }
        }
        $(this).parent().parent().find("input").replaceWith(`<p>${task_save}</p>`)
        $(this).hide()
        $(this).parent().find(".edit_data").show()
        localStorage.setItem("data", JSON.stringify(task_list));
      })

      // $("section").click(function () {
      //   console.log($(this).children()[0])
      //   $(this).children().children(".task_not_completed").css({ "backgroundColor": "rgba(20, 45, 76, 0.5)", "cursor": "none" })
      //   $(this).children("p").css({ "textDecorationLine": "line-through", "color": "rgba(0,0,0,0.6)" })
      //   status = false
      //   console.log(task_list)
      // })
      task_list.push({ "Task": data, status })
    }
    console.log(task_list)
    localStorage.setItem("data", JSON.stringify(task_list));

  }
})


$("#sort_list").click(function () {
  let sort_data = task_list
  sort_data.sort((a, b) => (a.Task > b.Task) ? 1 : ((b.Task > a.Task) ? -1 : 0))
  console.log(task_list)
  $("#display_task").html("")
  reload_data(sort_data)
  localStorage.setItem("data", JSON.stringify(task_list));
})

$("#filter_list").click(function () {
  let filtered_data = task_list
  filtered_data.sort((a, b) => (a.status < b.status) ? 1 : ((b.status < a.status) ? -1 : 0))
  console.log(task_list)
  $("#display_task").html("")
  reload_data(filtered_data)
  localStorage.setItem("data", JSON.stringify(task_list));
})


