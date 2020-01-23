<template>
  <nav class="navbar">
	<div class="container-fluid">
		<!-- Nav Header -->
		<div class="navbar-header">
			<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#collapse-1" aria-expanded="false">
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			</button>
			<a class="navbar-brand" href="#"><span class="fa fa-home"></span><span class="link"> Home</span></a>
		</div>
		<!-- Nav Collapse -->
		<div class="navbar-collapse collapse" id="collapse-1">
			<!-- Nav Left -->
			<ul class="nav navbar-nav">
				<!-- Products -->
				<li class="dropdown">
					<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
						<span class="fa fa-tags"></span><span class="link"> Products</span> <span class="fa fa-caret-down"></span></a>
					<ul class="dropdown-menu">
						<li><a href="#"><span class="fa fa-tag"></span> Catalogue 1</a></li>
						<li><a href="#"><span class="fa fa-tag"></span> Catalogue 2</a></li>
					</ul>
				</li>
				<!-- Services -->
				<li class="dropdown">
					<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
						<span class="fa fa-gears"></span><span class="link"> Services</span> <span class="fa fa-caret-down"></span></a>
					<ul class="dropdown-menu">
						<li><a href="#"><span class="fa fa-gear"></span> Service 1</a></li>
						<li><a href="#"><span class="fa fa-gear"></span> Service 2</a></li>
						<li><a href="#"><span class="fa fa-gear"></span> Service 3</a></li>
					</ul>
				</li>
				<!-- About -->
				<li><a href="#"><span class="fa fa-info-circle"></span><span class="link"> About</span></a></li>
				<!-- Contact -->
				<li><a href="#"><span class="fa fa-phone"></span><span class="link"> Contact</span></a></li>
        <!-- Login -->
        <li><a href="#"><span class="fa fa-sign-in"></span><span class="link"> Login</span></a></li>
       </ul>
        <!--<span v-if="isLoggedIn">
        |
        <a @click="logout">Logout</a>
      </span>
      <router-link to="/Login">Login</router-link>
			</ul>-->
			<!-- Nav Right -->
			<form class="navbar-form navbar-right">
				<div class="form-group">
					<input type="text" class="form-control" placeholder="Search">
				</div>
				<button type="submit" class="btn"><span class="fa fa-search"></span></button>
			</form>
		</div>
	</div>
</nav>
</template>
<script>
export default {};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto");
body {
  margin: 10%;
  color: white;
  background: #111111;
  font-family: "Roboto", sans-serif;
}

#nav-colors,
#font-colors,
#edges {
  margin-top: 10px;
}
#nav-colors .btn,
#font-colors .btn,
#edges .btn {
  display: inline-block;
  padding: 10px;
  margin: 0 5px;
  border: 2px solid #111111;
  -webkit-transition: 0.2s ease;
  transition: 0.2s ease;
}
#nav-colors .btn:hover,
#font-colors .btn:hover,
#edges .btn:hover {
  border: 2px solid white;
}

#font-colors #white {
  background: white;
}
#font-colors #black {
  background: black;
}

.navbar {
  border: 0;
  border-radius: 0px;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#396afc),
    to(#2948ff)
  );
  background: linear-gradient(to right, #396afc, #2948ff);
  margin-top: -5.98rem;
}
.navbar .nav li > a,
.navbar .navbar-brand {
  max-height: 50px;
  width: auto;
  background: transparent !important;
  font-size: 18px;
  -webkit-transition: 0.2s ease-in-out;
  transition: 0.2s ease-in-out;
}
.navbar .nav li > a:hover,
.navbar .navbar-brand:hover {
  background-color: rgba(255, 255, 255, 0.2);
  font-size: 14px;
}
.navbar .nav li > a:hover .link,
.navbar .navbar-brand:hover .link {
  width: 100%;
  padding: 0 5px 0 5px;
  visibility: visible;
  font-size: 14px;
}
.navbar .link {
  width: 0;
  font-family: "Roboto", sans-serif;
  -webkit-transition: 0.2s ease-in-out;
  transition: 0.2s ease-in-out;
  visibility: hidden;
  font-size: 0px;
}
.navbar span {
  color: white;
}
.navbar .navbar-toggle {
  padding-right: 0;
}
.navbar .navbar-toggle .icon-bar {
  background: white;
}
.navbar .navbar-collapse {
  display: none;
}
.navbar button {
  background: transparent;
}
.navbar button[type="submit"] {
  padding-right: 0;
}
.navbar button[type="submit"] span {
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
}
.navbar button[type="submit"]:hover span {
  -webkit-transform: scale(1.3) rotate(90deg);
  transform: scale(1.3) rotate(90deg);
}
.navbar form {
  padding: 0;
}
.navbar form .form-control {
  border: 0;
  border-radius: 0;
  color: black;
  font-weight: bold;
  background: rgba(255, 255, 255, 0.7);
  -webkit-transition: 0.2s ease-in-out;
  transition: 0.2s ease-in-out;
}
.navbar form .form-control:hover {
  background: white;
}
.navbar .dropdown .fa-caret-down {
  padding-left: 3px;
  font-size: 18px;
  -webkit-transition: 0.4s ease;
  transition: 0.4s ease;
}
.navbar .dropdown.open {
  background-color: rgba(255, 255, 255, 0.2);
  font-size: 14px;
}
.navbar .dropdown.open .link {
  width: 100%;
  visibility: visible;
  font-size: 14px;
  padding: 0 5px 0 5px;
}
.navbar .dropdown.open .dropdown-toggle {
  font-size: 14px;
}
.navbar .dropdown.open .fa-caret-down {
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
}
.navbar .dropdown .dropdown-menu {
  min-width: 0px !important;
  width: 100%;
  background: #ff5858;
  text-align: center;
  border-radius: 0;
}
.navbar .dropdown .dropdown-menu li,
.navbar .dropdown .dropdown-menu a {
  color: white;
  font-size: 14px;
  line-height: 30px;
}
.navbar .dropdown .dropdown-menu li:hover,
.navbar .dropdown .dropdown-menu a:hover {
  color: white;
  letter-spacing: 1px;
  background: transparent;
}
.navbar .dropdown .dropdown-menu a {
  padding: 0 15px 0 15px;
}

@media (max-width: 769px) {
  .navbar .link {
    padding-left: 10px;
    visibility: visible;
    width: 100%;
    font-size: 14px;
  }
  .navbar .navbar-brand .link {
    visibility: hidden;
  }

  .dropdown .dropdown-menu {
    text-align: left !important;
  }

  button[type="submit"] {
    width: 50%;
    float: left;
  }

  .navbar-form {
    border: 0;
  }

  .form-group {
    padding: 0;
    margin: 0;
  }
  .form-group input {
    width: 50%;
    float: left;
  }
}
</style>