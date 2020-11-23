<template>
    <div id="layoutSidenav_nav">
        <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
            <div class="sb-sidenav-menu">
                <div class="nav">
                    <div class="sb-sidenav-menu-heading">Main</div>

                    <router-link to="/" class="nav-link">
                        <div class="sb-nav-link-icon">
                            <i class="fas fa-tachometer-alt"></i>
                        </div>
                        Dashboard
                    </router-link>

                    <div class="sb-sidenav-menu-heading">Interface</div>

                    <router-link to="/categories" class="nav-link">
                        <div class="sb-nav-link-icon">
                            <i class="fas fa-tachometer-alt"></i>
                        </div>
                        Konzeptpapiere
                    </router-link>

                    <router-link to="/kanban" class="nav-link">
                        <div class="sb-nav-link-icon">
                            <i class="fas fa-tachometer-alt"></i>
                        </div>
                        Kanban Board
                    </router-link>
                    
                </div>
            </div>
            <div class="sb-sidenav-footer">
                <div class="small">Logged in as:</div>
                Doesnt work yet
            </div>
        </nav>
    </div>
</template>
