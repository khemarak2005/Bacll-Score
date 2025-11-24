
    function submitScore() {
        var math = parseFloat(document.getElementById("math").value) || 0;
        var khmer = parseFloat(document.getElementById("khmer").value) || 0;
        var physics = parseFloat(document.getElementById("physics").value) || 0;
        var chemistry = parseFloat(document.getElementById("chemistry").value) || 0;
        var biology = parseFloat(document.getElementById("biology").value) || 0;
        var history = parseFloat(document.getElementById("history").value) || 0;
        var english = parseFloat(document.getElementById("english").value) || 0;

        var result = document.getElementById("result");
        var grade = document.getElementById("Grade");
        

        var totalScore = math + khmer + physics + chemistry + biology + history + english;
        var grade = "";

  
if(totalScore == 0) {
  grade = ""
}
else if (totalScore >= 427) {
  grade = "A";
} else if (totalScore >= 380 && totalScore <= 426) {
  grade = "B";
} else if (totalScore >= 332 && totalScore <= 379) {
  grade = "C";
} else if (totalScore >= 285 && totalScore <= 331) {
  grade = "D";
} else if (totalScore >= 237 && totalScore <= 284) {
  grade = "E";
} else {
  grade = "F";
}

document.getElementById("totalScore").innerText = "TotalScore: " + totalScore;
document.getElementById("Grade").innerText = "Grade: " + grade;

  document.getElementById("math").addEventListener("input", function () {
    if (this.value > 125 || this.value < 0) {
          this.value = "";
      }
  });
  document.getElementById("khmer").addEventListener("input", function () {
            if (this.value > 75) {
          this.value = "";
      } else if (this.value < 0) {
      this.value = 0;
      }
  });
  document.getElementById("physics").addEventListener("input", function () {
            if (this.value > 75) {
          this.value = "";
      } else if (this.value < 0) {
      this.value = 0;
      }
  });
  document.getElementById("chemistry").addEventListener("input", function () {
            if (this.value > 75) {
          this.value = "";
      } else if (this.value < 0) {
      this.value = 0;
      }
  });
  document.getElementById("biology").addEventListener("input", function () {
            if (this.value > 75) {
          this.value = "";
      } else if (this.value < 0) {
      this.value = 0;
      }
  });
  document.getElementById("history").addEventListener("input", function () {
            if (this.value > 50) {
          this.value = "";
      } else if (this.value < 0) {
      this.value = 0;
      }
  });
  document.getElementById("english").addEventListener("input", function () {
            if (this.value > 50) {
          this.value = "";
      } else if (this.value < 0) {
      this.value = 0;
      }
  });
    }submitScore()
