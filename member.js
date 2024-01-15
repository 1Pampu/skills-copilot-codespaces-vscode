function skillsMember() {
    var member = document.getElementById("member");
    var skills = document.getElementById("skills");
    var memberList = document.getElementById("memberList");
    var skillsList = document.getElementById("skillsList");
    var memberBtn = document.getElementById("memberBtn");
    var skillsBtn = document.getElementById("skillsBtn");

    member.style.display = "block";
    skills.style.display = "none";
    memberList.style.display = "block";
    skillsList.style.display = "none";
    memberBtn.style.color = "#fff";
    skillsBtn.style.color = "#000";
}