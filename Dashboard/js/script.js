// Get the sidebar, close button, and search button elements
// let sidebar = document.querySelector(".sidebar");
// let closeBtn = document.querySelector("#btn");
// let searchBtn = document.querySelector(".bx-search");
// let navList = document.querySelector(".nav-list");



// Event listener for the menu button to toggle the sidebar open/close
// closeBtn.addEventListener("click", () => {
//   sidebar.classList.toggle("open"); // Toggle the sidebar's open state
//   navList.classList.toggle("scroll"); // Toggle scroll state
//   menuBtnChange(); // Call function to change button icon
// });

// // Event listener for the search button to open the sidebar
// searchBtn.addEventListener("click", () => {
//   sidebar.classList.toggle("open");
//   navList.classList.toggle("scroll");
//   menuBtnChange(); // Call function to change button icon
// });id="countryBtn"


  $(".sidebar_btn").click(function(){
  $(".sidebar").toggleClass("open");
  });

// document.addEventListener("DOMContentLoaded", () => {
//   const searchBtn = document.getElementById("searchBtn");
//   const sidebar = document.getElementById("sidebar");
//   const navList = document.getElementById("navList");

//   searchBtn.addEventListener("click", () => {
//     sidebar.classList.toggle("open");
//     navList.classList.toggle("scroll");
//     menuBtnChange(); // Call function to change button icon
//   });
// });

// Function to change the menu button icon
function menuBtnChange() {
  if (sidebar.classList.contains("open")) {
    closeBtn.classList.replace("bx-menu", "bx-menu-alt-right"); // Change icon to indicate closing
  } else {
    closeBtn.classList.replace("bx-menu-alt-right", "bx-menu"); // Change icon to indicate opening
  }
}


$(document).ready(function(){
  $('.sidebar ul li').click(function(){
    $('.sidebar li').removeClass("active");
    $(this).addClass("active");
});
    $(".arrow").click(function(){
  $(".user-menu").toggleClass("active");
  });
    $(".bell_img").click(function(){
  $(".icon-btn").toggleClass("active");
  });
  $(".countryBtn_top").click(function(){
  $(".countryBtn_top_dropdown").toggleClass("active");
  });

    $(".three-dots").click(function(){
            $(".three-menu").toggleClass("active");
            });

  //  $(".card_top_select .caret").click(function(){
  // $(".custom-dropdown").toggleClass("active");
  // });
 
});

 



 

$(document).ready(function () {
	$('select').selectpicker();
	$('select').change(function () {
		$('.output').html($(this).val());
	});
  
});



 


//  const ctx = document.getElementById('donutChart').getContext('2d');

//   new Chart(ctx, {
//     type: 'doughnut',
//     data: {
//       // labels: ['Active', 'Inactive', 'Pending'],
//       datasets: [{
//         data: [150, 80, 20],  // match your numbers
//         backgroundColor: ['#00C49F', '#FF6F61', '#CCCCCC'],
//         borderWidth: 0
//       }]
//     },
//     options: {
//       cutout: '100%',
//       plugins: {
//         legend: {
//           display: false // using our custom legend
//         },
//         tooltip: {
//           backgroundColor: '#000',
//           titleColor: '#fff',
//           bodyColor: '#fff',
//           callbacks: {
//             label: function(context) {
//               let label = context.label || '';
//               let value = context.raw || 0;
//               return label + ': ' + value;
//             }
//           }
//         }
//       }
//     }
//   });


  document.addEventListener('DOMContentLoaded', function () {
  const ctx = document.getElementById('donutChart').getContext('2d');
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      datasets: [{
        data: [150, 80, 20],
        backgroundColor: ['#00C49F', '#FF6F61', '#CCCCCC'],
        borderWidth: 0
      }]
    },
    options: {
      cutout: '100%',
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          backgroundColor: '#000',
          titleColor: '#fff',
          bodyColor: '#fff',
          callbacks: {
            label: function(context) {
              let label = context.label || '';
              let value = context.raw || 0;
              return label + ': ' + value;
            }
          }
        }
      }
    }
  });
});
  




    // Location Bar Chart
    new Chart(document.getElementById('barChart'), {
      type: 'horizontalBar',
      data: {
        labels: ['New Delhi', 'Noida', 'Gurgaon', 'Faridabad', 'Ghaziabad'],
        datasets: [{
          label: 'Doctors',
          data: [14, 6, 3, 6, 10],
          backgroundColor: '#0252A9'
        }]
      },
      options: { responsive: true, scales: { x: { beginAtZero: true } } }
    });
 

    // Appointment Line Chart
    new Chart(document.getElementById('lineChart'), {
      type: 'line',
      data: {
        labels: ['Feb 2025', 'Jun 2025', 'Oct 2025', 'Feb 2026'],
        datasets: [{
          label: 'Appointments',
          data: [25, 40, 55, 45],
          borderColor: '#007bff',
          fill: false,
          tension: 0.3,
          fontsize:16
        }]
      },
      options: { responsive: true }
    });



 

//  document.addEventListener('DOMContentLoaded', () => {
//   const dropdowns = document.querySelectorAll('.dropdown');

//   dropdowns.forEach(drop => {
//     drop.addEventListener('click', e => {
//       e.stopPropagation();
//       // Close other dropdowns first
//       dropdowns.forEach(d => {
//         if (d !== drop) d.classList.remove('active');
//       });
//       // Toggle current
//       drop.classList.toggle('active');
//     });
//   });

//   // Click outside to close
//   document.addEventListener('click', () => {
//     dropdowns.forEach(d => d.classList.remove('active'));
//   });
// });

  // $(".arrowe").click(function(){
  // $(".dropdown").toggleClass("active");
  // });





 const btn = document.getElementById('countryBtn');
  const dropdown = document.getElementById('countryDropdown');
  const options = document.getElementById('countryOptions').getElementsByTagName('li');
  const search = document.getElementById('countrySearch');

  // open/close dropdown
  btn.addEventListener('click', () => {
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
  });

  // option click
  for (let opt of options) {
    opt.addEventListener('click', () => {
      // remove previous selection
      for (let o of options) o.classList.remove('selected');
      opt.classList.add('selected');
      btn.innerHTML = opt.textContent + ' <span class="caret"></span>';
      dropdown.style.display = 'none';
    });
  }

  $(".caret").click(function(){
        $(".custom-dropdown").toggle();
    });
  
    document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
    toggle.addEventListener('click', function () {
      const dropdown = this.closest('.dropdown');
      dropdown.classList.toggle('open');
    });
  });

  // Filter options inside each dropdown
  // document.querySelectorAll('.dropdown').forEach(dropdown => {
  //   const input = dropdown.querySelector('.filter-input');
  //   input.addEventListener('input', function () {
  //     const filter = input.value.toLowerCase();
  //     dropdown.querySelectorAll('label').forEach(label => {
  //       const text = label.textContent.toLowerCase();
  //       label.style.display = text.includes(filter) ? '' : 'none';
  //     });
  //   });
  // });



  
  // Close all dropdowns when clicking outside
  window.addEventListener('click', function (e) {
    document.querySelectorAll('.dropdown').forEach(dropdown => {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('open');
      }
    });
  });

  

//   const optionMenu = document.querySelector(".select-menu"),
//   selectBtn = optionMenu.querySelector(".select-btn"),
//   options = optionMenu.querySelectorAll(".option"),
//   sBtn_text = optionMenu.querySelector(".sBtn-text");

// selectBtn.addEventListener("click", () =>
//   optionMenu.classList.toggle("active")
// );

// options.forEach((option) => {
//   option.addEventListener("click", () => {
//     let selectedOption = option.querySelector(".option-text").innerText;
//     sBtn_text.innerText = selectedOption;

//     optionMenu.classList.remove("active");
//   });
// });

(function ($) {
  $(document).ready(function() {
    const $optionMenu = $(".select-menu"),
      $selectBtn = $optionMenu.find(".select-btn"),
      $options = $optionMenu.find(".option"),
      $sBtn_text = $optionMenu.find(".sBtn-text");
    $selectBtn.on("click", function() {
      $optionMenu.toggleClass("active");
    });
    $options.on("click", function() {
      let selectedOption = $(this).find(".option-text").text();
      $sBtn_text.text(selectedOption);
      $optionMenu.removeClass("active");
    });
  });
})(jQuery);

const toggleBtn = document.getElementById("dropdownToggle");
const dropdownMenu = document.getElementById("dropdownMenu");

toggleBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  dropdownMenu.classList.toggle("show");
});

// Close dropdown when clicking outside
document.addEventListener("click", function (e) {
  if (!dropdownMenu.contains(e.target) && !toggleBtn.contains(e.target)) {
    dropdownMenu.classList.remove("show");
  }
});