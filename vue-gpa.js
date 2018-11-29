window.onload = function () {
  var gpaCalc = new Vue({
    el: '#app',
    data() {
      return {
        dept: 'ceng',
        gpa: 4,
        depts: __depts,
        courses: __courses,
        loaded: false
      }
    },
    mounted() {
      this.loaded = true
    },
    methods: {
      update_gpa() {
        var vm = this
        let total_credits = 0
        let total_score = 0
        $(".tb-sel").each(function() {
          var credit = Number($(this).attr("data-ccredit"))
          total_credits += credit
          total_score += Number($(this).val()) * credit
        })
        vm.gpa = (total_score / total_credits).toFixed(2)
      },
      clear_table() {
        console.log(this.dept)
        this.gpa = 4
        $(".tb-sel").each(function() {
          $(this).val("4")
        })
      }
    }
  })
}
