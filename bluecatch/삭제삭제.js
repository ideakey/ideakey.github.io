var presentation_id = 1;
var presentation_index = 0;
var presentation_size = 0;
var count_projects = 7;
var zcube = 0;
var ycube = 0;
var xcube = 0;
var type = 'screen';
var site = "Project";
var zindex = 100;
var action_transition = true;
var url = "http://ndc.agency/";
var showProjectActive = false;

function UstawPanel() {
    if (type_user == 'phone') {
        if ($(window).width() > 1280) {
            $('#panel').css('left', -(2560 - $(window).width()) / 2)
        } else if ($(window).width() <= 1280) {
            $('#panel').css('left', '-800px')
        }
        if ($(window).height() > 800) {
            $('#panel').css('top', -(1440 - $(window).height()) / 2)
        } else if ($(window).height() <= 800) {
            $('#panel').css('top', '-335px')
        }
    } else if (type_user == 'tablet') {
        if ($(window).width() > 1280) {
            $('#panel').css('left', -(2560 - $(window).width()) / 2)
        } else if ($(window).width() <= 1280) {
            $('#panel').css('left', '-640px')
        }
        if ($(window).height() > 800) {
            $('#panel').css('top', -(1440 - $(window).height()) / 2)
        } else if ($(window).height() <= 800) {
            $('#panel').css('top', '-335px')
        }
    } else if (type_user == 'desktop') {
        if ($(window).width() > 1280) {
            $('#panel').css('left', -(2560 - $(window).width()) / 2)
        } else if ($(window).width() <= 1280) {
            $('#panel').css('left', '-640px')
        }
        if ($(window).height() > 800) {
            $('#panel').css('top', -(1440 - $(window).height()) / 2)
        } else if ($(window).height() <= 800) {
            $('#panel').css('top', '-335px')
        }
        if ($(window).width() < 1024 || $(window).height() < 600) {
            $('#info_size').css('display', 'block')
        } else {
            $('#info_size').css('display', 'none')
        }
    }
    if ($(window).width() < 1400) {
        $('#badge_csswinner').css('display', 'none');
        $('#cssdesignawards').css('display', 'none');
        $('#bestcss').css('display', 'none');
        $('#opa').css('display', 'none');
        $('#designlicks').css('display', 'none');
        $('#nectar').css('display', 'none');
        $('#awwwards_honorable').css('display', 'none');
    } else {
        $('#badge_csswinner').css('display', 'block');
        $('#cssdesignawards').css('display', 'block');
        $('#bestcss').css('display', 'block');
        $('#opa').css('display', 'block');
        $('#designlicks').css('display', 'block');
        $('#nectar').css('display', 'block');
        $('#awwwards_honorable').css('display', 'block');
    }
    return false
}

function showLines(delay) {
    $("#lines").delay(delay).animate({
        opacity: 1.0
    }, 500, function() {})
}

function hideLines(delay) {
    $("#lines").delay(delay).animate({
        opacity: 0.0
    }, 500, function() {})
}

function setMenu(id) {
    $("#menu a").each(function(index) {
        $(this).removeClass('active')
    });
    $("#m_" + id).addClass('active')
}

function setUrl(alias) {
    window.location.replace(url + alias)
}

function get_browser() {
    var ua = navigator.userAgent,
        tem, M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if (/trident/i.test(M[1])) {
        tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'IE ' + (tem[1] || '')
    }
    if (M[1] === 'Chrome') {
        tem = ua.match(/\bOPR\/(\d+)/);
        if (tem != null) {
            return 'Opera ' + tem[1]
        }
    }
    M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
    if ((tem = ua.match(/version\/(\d+)/i)) != null) {
        M.splice(1, 1, tem[1])
    }
    return M[0]
}

function get_browser_version() {
    var ua = navigator.userAgent,
        tem, M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if (/trident/i.test(M[1])) {
        tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'IE ' + (tem[1] || '')
    }
    if (M[1] === 'Chrome') {
        tem = ua.match(/\bOPR\/(\d+)/);
        if (tem != null) {
            return 'Opera ' + tem[1]
        }
    }
    M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
    if ((tem = ua.match(/version\/(\d+)/i)) != null) {
        M.splice(1, 1, tem[1])
    }
    return M[1]
}

function startPresentation(delay) {
    $("#lines").delay(delay).animate({
        opacity: 1.0
    }, 0, function() {
        var tab = [];
        while (tab.length < count_projects) {
            var id = Math.ceil(Math.random() * count_projects);
            var found = false;
            for (var i = 0; i < tab.length; i++) {
                if (tab[i] == id) {
                    found = true;
                    break
                }
            }
            if (!found) {
                tab[tab.length] = id;
                $("#p_" + id).stop().delay(100 * id).animate({
                    opacity: 1
                }, 500, function() {
                    $(this).delay(1000).animate({
                        opacity: 0
                    }, 500, function() {})
                })
            }
        }
        setTimeout(function() {
            action_transition = false;
            var id_start = Math.floor((Math.random() * count_projects) + 1);
            showProject(id_start, 0)
        }, 3000)
    })
}

function setDots(delay) {
    $(".dot").delay(delay).each(function(index) {
        var timeOne = Math.floor((Math.random() * 500) + 1000);
        $(this).animate({
            top: $(this).attr('data-top'),
            left: $(this).attr('data-left'),
            opacity: 1.0
        }, timeOne, function() {})
    });
    return true
}

function setDotsPresenation() {
    $(".dot").each(function(index) {
        var top = 0;
        var left = 0;
        var timeOne = Math.floor((Math.random() * 500) + 1000);
        var nr = Math.floor((Math.random() * 5) + 1);
        if (nr == 1) {
            top = 362;
            left = 1449
        } else if (nr == 2) {
            top = 619;
            left = 1815
        } else if (nr == 3) {
            top = 708;
            left = 1769
        } else if (nr == 4) {
            top = 939;
            left = 875
        } else if (nr == 5) {
            top = 861;
            left = 870
        }
        $(this).animate({
            top: top,
            left: left,
            opacity: 1.0
        }, timeOne, function() {
            var position = $(this).position();
            if (position.top == 362) {
                top = 619;
                left = 1815
            } else if (position.top == 619) {
                top = 708;
                left = 1769
            } else if (position.top == 708) {
                top = 939;
                left = 875
            } else if (position.top == 939) {
                top = 861;
                left = 870
            } else if (position.top == 861) {
                top = 362;
                left = 1449
            }
            $(this).delay(500).animate({
                top: top,
                left: left,
                opacity: 1.0
            }, 1000, function() {})
        })
    });
    return true
}

function setPresenation(delay, id) {
    presentation_id = id;
    presentation_index = 0;
    presentation_size = 0;
    $("#presentation_title").text('');
    $("#presentation_description").text('');
    $("#presentation_link").html('');
    $("#presentation_icons").html('');
    i_presentation.src = "../foto/p" + id + "_hover.jpg";
    $("#presentation_title").text($("#p_" + id + " .title_static").text());
    $("#presentation_description").text($("#p_" + id + " .description").text());
    if ($("#p_" + id + " .link").text() != "") {
        $("#presentation_link").html('<a href="http://' + $("#p_" + id + " .link").text() + '" target="_blank" >view online</a>')
    }
    $("#presentation_icons").html($("#p_" + id + " .icons").html());
    poly_presentation.setFillPatternImage(i_presentation);
    layer_presentation.add(poly_presentation);
    stage_presentation.add(layer_presentation);
    $("#presentation").css('display', 'block');
    $("#presentation").addClass('active');
    $("#presentation").delay(delay).animate({
        opacity: 1.0
    }, 500, function() {
        setDots(0);
        showLines(1000);
        setTimeout(function() {
            $("#presentation_title").css('opacity', '1.0');
            $("#presentation_title").shuffleLetters();
            $("#presentation_description").css('opacity', '1.0');
            $("#presentation_view").css('opacity', '1.0');
            $("#presentation_view").shuffleLetters();
            $("#presentation_site").css('opacity', '1.0');
            $("#presentation_site").shuffleLetters();
            $("#presentation_link a").css('opacity', '1.0');
            $("#presentation_link a").shuffleLetters();
            $("#presentation_icons_link").css('opacity', '1.0');
            $("#presentation_icons_link").shuffleLetters();
            $("#presentation_icons_link_specific").css('opacity', '1.0');
            $("#presentation_close").animate({
                opacity: 1.0
            }, 500, function() {});
            $("#presentation_icons").css('opacity', '1.0');
            $("#presentation_icons div").each(function(index) {
                var element = $(this);
                setTimeout(function() {
                    element.css('opacity', '1.0');
                    element.removeClass('flipOutX').addClass('animated flipInX')
                }, index * 250)
            });
            action_transition = false
        }, 1500)
    });
    return true
};

function setPresenationHover() {
    if ($("#mp_1").hasClass("active")) {
        poly_presentation.setFillPatternImage(i_1_hover_p)
    } else if ($("#mp_2").hasClass("active")) {
        poly_presentation.setFillPatternImage(i_2_hover_p)
    } else if ($("#mp_3").hasClass("active")) {
        poly_presentation.setFillPatternImage(i_3_hover_p)
    } else if ($("#mp_4").hasClass("active")) {
        poly_presentation.setFillPatternImage(i_4_hover_p)
    } else if ($("#mp_5").hasClass("active")) {
        poly_presentation.setFillPatternImage(i_5_hover_p)
    } else if ($("#mp_6").hasClass("active")) {
        poly_presentation.setFillPatternImage(i_6_hover_p)
    } else if ($("#mp_7").hasClass("active")) {
        poly_presentation.setFillPatternImage(i_7_hover_p)
    } else if ($("#mp_8").hasClass("active")) {
        poly_presentation.setFillPatternImage(i_8_hover_p)
    }
    layer_presentation.add(poly_presentation);
    stage_presentation.add(layer_presentation);
    $("#presentation_view_more").css('opacity', '1.0');
    $("#presentation_view_more").shuffleLetters()
}

function setPresenationHoverOver() {
    if ($("#mp_1").hasClass("active")) {
        poly_presentation.setFillPatternImage(i_1_hover)
    } else if ($("#mp_2").hasClass("active")) {
        poly_presentation.setFillPatternImage(i_2_hover)
    } else if ($("#mp_3").hasClass("active")) {
        poly_presentation.setFillPatternImage(i_3_hover)
    } else if ($("#mp_4").hasClass("active")) {
        poly_presentation.setFillPatternImage(i_4_hover)
    } else if ($("#mp_5").hasClass("active")) {
        poly_presentation.setFillPatternImage(i_5_hover)
    } else if ($("#mp_6").hasClass("active")) {
        poly_presentation.setFillPatternImage(i_6_hover)
    } else if ($("#mp_7").hasClass("active")) {
        poly_presentation.setFillPatternImage(i_7_hover)
    } else if ($("#mp_8").hasClass("active")) {
        poly_presentation.setFillPatternImage(i_8_hover)
    }
    layer_presentation.add(poly_presentation);
    stage_presentation.add(layer_presentation);
    $("#presentation_view_more").css('opacity', '0.0')
}

function setPresenationMP(delay, id) {
    presentation_id = id;
    presentation_index = 0;
    presentation_size = 0;
    $("#presentation_title").text('');
    $("#presentation_description").text('');
    $("#presentation_link").html('');
    $("#presentation_icons").html('');
    i_presentation.src = "../foto/p" + id + "_hover.jpg";
    $("#presentation_title").text($("#p_" + id + " .title_static").text());
    $("#presentation_description").text($("#p_" + id + " .description").text());
    if ($("#p_" + id + " .link").text() != "") {
        $("#presentation_link").html('<a href="http://' + $("#p_" + id + " .link").text() + '" target="_blank">view online</a>')
    }
    $("#presentation_icons").html($("#p_" + id + " .icons").html());
    poly_presentation.setFillPatternImage(i_presentation);
    layer_presentation.add(poly_presentation);
    stage_presentation.add(layer_presentation);
    $("#presentation").css('display', 'block');
    $("#presentation").addClass('active');
    $("#presentation_title").css('opacity', '1.0');
    $("#presentation_title").shuffleLetters();
    $("#presentation_description").css('opacity', '1.0');
    $("#presentation_view").css('opacity', '1.0');
    $("#presentation_view").shuffleLetters();
    $("#presentation_site").css('opacity', '1.0');
    $("#presentation_site").shuffleLetters();
    $("#presentation_link a").css('opacity', '1.0');
    $("#presentation_link a").shuffleLetters();
    $("#presentation_icons_link").css('opacity', '1.0');
    $("#presentation_icons_link").shuffleLetters();
    $("#presentation_icons_link_specific").css('opacity', '1.0');
    $("#presentation_close").css('opacity', '1.0');
    setTimeout(function() {
        $("#presentation_icons").css('opacity', '1.0');
        $("#presentation_icons div").each(function(index) {
            var element = $(this);
            setTimeout(function() {
                element.css('opacity', '1.0');
                element.removeClass('flipOutX').addClass('animated flipInX')
            }, index * 250)
        });
        action_transition = false
    }, 0);
    return true
};

function setPresenationOut(delay) {
    $("#presentation").removeClass('active');
    $("#presentation, #presentation_title, #presentation_description, #presentation_icons, #presentation_link a, #presentation_view, #presentation_site, #presentation_icons_link, #presentation_icons_link_specific, #presentation_close").delay(delay).animate({
        opacity: 0.0
    }, 1000, function() {
        $("#presentation").css('display', 'none')
    });
    $("#presentation_icons div").each(function(index) {
        var element = $(this);
        element.css('opacity', '0.0');
        element.removeClass('flipInX').addClass('animated flipOutX')
    });
    return true
};

function setDotsPresenationFull(delay) {
    $(".dot").each(function(index) {
        var top = 0;
        var left = 0;
        var timeOne = Math.floor((Math.random() * 500) + 1000);
        top = 720;
        left = 1280;
        $(this).delay(delay).animate({
            top: top,
            left: left,
            opacity: 1.0
        }, timeOne, function() {})
    });
    return true
}

function setPresenationFull(delay) {
    type = 'screen';
    $("#presentation_screen").removeClass('active');
    $("#presentation_tablet").removeClass('active');
    $("#presentation_phone").removeClass('active');
    $("#presentation_screen").addClass('active');
    $.ajax({
        url: "SerwletAjax.php",
        type: "POST",
        async: false,
        data: ({
            f: 'getPresentation',
            id: presentation_id,
            index: presentation_index,
            way: "next",
            type: type
        }),
        success: function(data) {
            $("#presentation_full_view").html(data);
            $("#presentation_full_index").html(presentation_index + '/' + presentation_size);
            setVideo()
        }
    });
    $("#presentation_full").css('display', 'block');
    $("#presentation_full").addClass('active');
    $("#presentation_full").delay(delay).animate({
        opacity: 1.0
    }, 500, function() {
        $("#presentation_full_loading").delay(1000).fadeOut(500);
        $("#presentation_full_view").delay(1000).animate({
            opacity: 1.0
        }, 500, function() {});
        setTimeout(function() {
            $("#presentation_title_bottom").shuffleLetters()
        }, 1000);
        setTimeout(function() {
            $("#presentation_title_site").shuffleLetters()
        }, 1000);
        setTimeout(function() {
            $("#presentation_full_close").css('opacity', '1.0')
        }, 1500)
    });
    return true
};

function setPresenationFullOut(delay) {
    $("#presentation_full").removeClass('active');
    $("#presentation_full").delay(delay).animate({
        opacity: 0.0
    }, 1000, function() {
        $("#presentation_full").css('display', 'none');
        $("#presentation_full_loading").css('display', 'block')
    });
    return true
};

function setVideo() {
    var wspolczynnik_filmu = 1.77777778;
    var wspolczynnik_okna = $(window).width() / $(window).height();
    var szerokosc_filmu = 1920;
    var wysokosc_filmu = 1080;
    var top_panel_video = 0;
    if (wspolczynnik_okna > wspolczynnik_filmu) {
        szerokosc_filmu = 1000;
        if ($("#contener3d").hasClass("screen")) {
            szerokosc_filmu = 1000
        }
        if ($("#contener3d").hasClass("tablet")) {
            szerokosc_filmu = 400
        }
        if ($("#contener3d").hasClass("phone")) {
            szerokosc_filmu = 400
        }
        $("video").attr("width", szerokosc_filmu);
        wysokosc_filmu = szerokosc_filmu / wspolczynnik_filmu;
        $("video").attr("height", wysokosc_filmu);
        top_panel_video = (wysokosc_filmu - $(window).height()) / 2;
        $('.full-screen-film').css({
            width: szerokosc_filmu,
            height: wysokosc_filmu
        });
        $('.full-screen-film').css({
            top: -top_panel_video
        });
        $('.full-screen-film').css({
            left: 0
        })
    } else {
        wysokosc_filmu = 563;
        if ($("#contener3d").hasClass("screen")) {
            wysokosc_filmu = 563
        }
        if ($("#contener3d").hasClass("tablet")) {
            wysokosc_filmu = 533
        }
        if ($("#contener3d").hasClass("phone")) {
            wysokosc_filmu = 225
        }
        $("video").attr("height", wysokosc_filmu);
        szerokosc_filmu = wysokosc_filmu * wspolczynnik_filmu;
        $("video").attr("width", szerokosc_filmu);
        left_panel_video = (szerokosc_filmu - $(window).width()) / 2;
        $('.full-screen-film').css({
            width: szerokosc_filmu,
            height: wysokosc_filmu
        });
        $('.full-screen-film').css({
            top: 0
        });
        $('.full-screen-film').css({
            left: -left_panel_video
        })
    }
}

function setClickContact() {
    setUrl('#contact');
    $("#menu_projects div").each(function(index) {
        $(this).removeClass('active')
    });
    if ($(".project.doing").length) {
        var id = $(".project.doing").attr('id').substr(2, 1);
        endProjects(id, 500, 0)
    } else if ($("#presentation").hasClass('active')) {
        setPresenationOut(0)
    } else if ($("#presentation_full").hasClass('active')) {
        setPresenationFullOut(0)
    } else if ($("#contact").hasClass('active')) {} else if ($("#clients").hasClass('active')) {
        setClientsOut(0)
    } else if ($("#aspects").hasClass('active')) {
        setAspectsOut(0)
    }
    hideLines(500);
    setDotsContact();
    setContact(3000)
}

function setDotsContact() {
    $(".dot").each(function(index) {
        var top = 0;
        var left = 0;
        var timeOne = Math.floor((Math.random() * 500) + 1000);
        var nr = Math.floor((Math.random() * 5) + 1);
        if (nr == 1) {
            top = 389;
            left = 1057
        } else if (nr == 2) {
            top = 340;
            left = 1418
        } else if (nr == 3) {
            top = 619;
            left = 1815
        } else if (nr == 4) {
            top = 708;
            left = 1769
        } else if (nr == 5) {
            top = 847;
            left = 1231
        }
        $(this).animate({
            top: top,
            left: left,
            opacity: 1.0
        }, timeOne, function() {
            var position = $(this).position();
            if (position.top == 389) {
                top = 340;
                left = 1418
            } else if (position.top == 340) {
                top = 619;
                left = 1815
            } else if (position.top == 619) {
                top = 708;
                left = 1769
            } else if (position.top == 708) {
                top = 847;
                left = 1231
            } else if (position.top == 847) {
                top = 389;
                left = 1057
            }
            $(this).delay(500).animate({
                top: top,
                left: left,
                opacity: 1.0
            }, 1000, function() {})
        })
    });
    return true
}

function setContact(delay) {
    poly_contact.setFillPatternImage(i_contact);
    layer_contact.add(poly_contact);
    stage_contact.add(layer_contact);
    $("#contact").css('display', 'block');
    $("#contact").addClass('active');
    $("#contact").delay(delay).animate({
        opacity: 1.0
    }, 500, function() {
        setDots(0);
        showLines(1000);
        setTimeout(function() {
            $("#contact_title").css('opacity', '1.0');
            $("#contact_title").shuffleLetters()
        }, 1500);
        setTimeout(function() {
            $("#contact_description").css('opacity', '1.0');
            $("#contact_description").shuffleLetters()
        }, 2000);
        setTimeout(function() {
            $("#contact_close").animate({
                opacity: 1.0
            }, 500, function() {});
            $("#contact_form").animate({
                opacity: 1.0
            }, 500, function() {})
        }, 1500);
        setTimeout(function() {
            $("#contact_office").css('opacity', '1.0');
            $("#contact_office").shuffleLetters()
        }, 3500);
        setTimeout(function() {
            $("#contact_email").css('opacity', '1.0');
            $("#contact_email").shuffleLetters()
        }, 4000);
        setTimeout(function() {
            $("#contact_office_description1").css('opacity', '1.0');
            $("#contact_office_description1").shuffleLetters()
        }, 4500);
        setTimeout(function() {
            $("#contact_office_description2").css('opacity', '1.0');
            $("#contact_office_description2").shuffleLetters();
            action_transition = false
        }, 5000)
    });
    return true
};

function setContactOut(delay) {
    $("#contact").removeClass('active');
    $("#contact, #contact_title, #contact_description, #contact_close, #contact_form, #contact_office, #contact_office_description1, #contact_office_description2, #contact_email").delay(delay).animate({
        opacity: 0.0
    }, 1000, function() {
        $("#contact").css('display', 'none')
    });
    return true
};

function setClickClients() {
    setUrl('#clients');
    $("#menu_projects div").each(function(index) {
        $(this).removeClass('active')
    });
    if ($(".project.doing").length) {
        var id = $(".project.doing").attr('id').substr(2, 1);
        endProjects(id, 500, 0)
    } else if ($("#presentation").hasClass('active')) {
        setPresenationOut(0)
    } else if ($("#presentation_full").hasClass('active')) {
        setPresenationFullOut(0)
    } else if ($("#contact").hasClass('active')) {
        setContactOut(0)
    } else if ($("#clients").hasClass('active')) {} else if ($("#aspects").hasClass('active')) {
        setAspectsOut(0)
    }
    hideLines(500);
    setDotsClients();
    setClients(3000)
}

function setDotsClients() {
    $(".dot").each(function(index) {
        var top = 0;
        var left = 0;
        var timeOne = Math.floor((Math.random() * 500) + 1000);
        var nr = Math.floor((Math.random() * 6) + 1);
        if (nr == 1) {
            top = 418;
            left = 843
        } else if (nr == 2) {
            top = 340;
            left = 1418
        } else if (nr == 3) {
            top = 619;
            left = 1815
        } else if (nr == 4) {
            top = 708;
            left = 1769
        } else if (nr == 5) {
            top = 899;
            left = 1031
        } else if (nr == 6) {
            top = 809;
            left = 867
        }
        $(this).animate({
            top: top,
            left: left,
            opacity: 1.0
        }, timeOne, function() {
            var position = $(this).position();
            if (position.top == 418) {
                top = 340;
                left = 1418
            } else if (position.top == 340) {
                top = 619;
                left = 1815
            } else if (position.top == 619) {
                top = 708;
                left = 1769
            } else if (position.top == 708) {
                top = 899;
                left = 1031
            } else if (position.top == 899) {
                top = 809;
                left = 867
            } else if (position.top == 809) {
                top = 418;
                left = 843
            }
            $(this).delay(500).animate({
                top: top,
                left: left,
                opacity: 1.0
            }, 1000, function() {})
        })
    });
    return true
}

function setClients(delay) {
    poly_clients.setFillPatternImage(i_clients);
    layer_clients.add(poly_clients);
    stage_clients.add(layer_clients);
    $("#clients").css('display', 'block');
    $("#clients").addClass('active');
    $("#clients").delay(delay).animate({
        opacity: 1.0
    }, 500, function() {
        setDots(0);
        showLines(1000);
        setTimeout(function() {
            $("#clients_title").css('opacity', '1.0');
            $("#clients_title").shuffleLetters()
        }, 1500);
        setTimeout(function() {
            $("#clients_close").animate({
                opacity: 1.0
            }, 500, function() {});
            $("#clients_form").animate({
                opacity: 1.0
            }, 500, function() {})
        }, 1500);
        setTimeout(function() {
            $("#clients_description").css('opacity', '1.0');
            $("#clients_description").shuffleLetters();
            setTimeout(function() {
                action_transition = false
            }, 1000)
        }, 2000)
    });
    return true
};

function setClientsOut(delay) {
    $("#clients").removeClass('active');
    $("#clients, #clients_title, #clients_description, #clients_close").delay(delay).animate({
        opacity: 0.0
    }, 1000, function() {
        $("#clients").css('display', 'none')
    });
    return true
};

function setClickAspects() {
    setUrl('#aspects');
    $("#menu_projects div").each(function(index) {
        $(this).removeClass('active')
    });
    if ($(".project.doing").length) {
        var id = $(".project.doing").attr('id').substr(2, 1);
        endProjects(id, 500, 0)
    } else if ($("#presentation").hasClass('active')) {
        setPresenationOut(0)
    } else if ($("#presentation_full").hasClass('active')) {
        setPresenationFullOut(0)
    } else if ($("#contact").hasClass('active')) {
        setContactOut(0)
    } else if ($("#clients").hasClass('active')) {
        setClientsOut(0)
    } else if ($("#aspects").hasClass('active')) {}
    hideLines(500);
    setDotsAspects();
    setAspects(3000)
}

function setDotsAspects() {
    $(".dot").each(function(index) {
        var top = 0;
        var left = 0;
        var timeOne = Math.floor((Math.random() * 500) + 1000);
        var nr = Math.floor((Math.random() * 5) + 1);
        if (nr == 1) {
            top = 418;
            left = 843
        } else if (nr == 2) {
            top = 340;
            left = 1418
        } else if (nr == 3) {
            top = 619;
            left = 1815
        } else if (nr == 4) {
            top = 1175;
            left = 1527
        } else if (nr == 5) {
            top = 809;
            left = 867
        }
        $(this).animate({
            top: top,
            left: left,
            opacity: 1.0
        }, timeOne, function() {
            var position = $(this).position();
            if (position.top == 418) {
                top = 340;
                left = 1418
            } else if (position.top == 340) {
                top = 619;
                left = 1815
            } else if (position.top == 619) {
                top = 1175;
                left = 1527
            } else if (position.top == 1175) {
                top = 809;
                left = 867
            } else if (position.top == 809) {
                top = 418;
                left = 843
            }
            $(this).delay(500).animate({
                top: top,
                left: left,
                opacity: 1.0
            }, 1000, function() {})
        })
    });
    return true
}

function setAspects(delay) {
    poly_aspects.setFillPatternImage(i_aspects);
    layer_aspects.add(poly_aspects);
    stage_aspects.add(layer_aspects);
    $("#aspects").css('display', 'block');
    $("#aspects").addClass('active');
    $("#aspects").delay(delay).animate({
        opacity: 1.0
    }, 500, function() {
        setDots(0);
        showLines(1000);
        setTimeout(function() {
            $("#aspects_title").css('opacity', '1.0');
            $("#aspects_title").shuffleLetters()
        }, 1500);
        setTimeout(function() {
            $("#aspects_description").css('opacity', '1.0');
            $("#aspects_description").shuffleLetters()
        }, 2000);
        setTimeout(function() {
            $("#aspects_close").animate({
                opacity: 1.0
            }, 500, function() {});
            $("#aspects_form").animate({
                opacity: 1.0
            }, 500, function() {})
        }, 1500);
        var len = $("#aspects ul li").length;
        $("#aspects ul li").each(function(index) {
            $(this).delay(200 * index).animate({
                opacity: 1.0
            }, 500, function() {
                if (index == len - 1) {
                    action_transition = false
                }
            })
        })
    });
    return true
};

function setAspectsOut(delay) {
    $("#aspects").removeClass('active');
    $("#aspects, #aspects_title, #aspects_description, #aspects_close").delay(delay).animate({
        opacity: 0.0
    }, 1000, function() {
        $("#aspects").css('display', 'none')
    });
    $("#aspects ul li").each(function(index) {
        $(this).animate({
            opacity: 0.0
        }, 1000, function() {});
        $(this).removeClass('active');
        $(this).find('p').hide()
    });
    return true
};

function setClickProjects() {
    $("#menu_projects div").each(function(index) {
        $(this).removeClass('active')
    });
    if ($(".project.doing").length) {} else if ($("#presentation").hasClass('active')) {
        setPresenationOut(0);
        showProject(1, 1000)
    } else if ($("#presentation_full").hasClass('active')) {
        setPresenationFullOut(0);
        setDots(0);
        showLines(1000);
        showProject(1, 1500)
    } else if ($("#contact").hasClass('active')) {
        setContactOut(0);
        showProject(1, 1500)
    } else if ($("#clients").hasClass('active')) {
        setClientsOut(0);
        showProject(1, 1500)
    } else if ($("#aspects").hasClass('active')) {
        setAspectsOut(0);
        showProject(1, 1500)
    }
    $("#menu_projects div").each(function(index) {
        $(this).removeClass('active')
    })
}

function setMouseenterMP(id) {
    $("#mp_" + id + "_title").css('display', 'block');
    $("#mp_" + id + "_title").shuffleLetters();
    if ($(".project.doing").length) {
        setTimeout(function() {
            $(".project.doing").stop();
            var id_old = $(".project.doing").attr('id').substr(2, 1);
            $("#p_" + id_old).removeClass('active');
            $("#mp_" + id_old).removeClass('active');
            $("#p_" + id_old).css('opacity', '0');
            $("#p_" + id_old).removeClass('doing');
            $("#mp_" + id_old).removeClass('doing');
            $("#p_" + id_old + " .title").css('display', 'none');
            if (id_old == 1) {
                poly_1.setFillPatternImage(i_1);
                layer_1.add(poly_1);
                stage_1.add(layer_1)
            }
            if (id_old == 2) {
                poly_2.setFillPatternImage(i_2);
                layer_2.add(poly_2);
                stage_2.add(layer_2)
            }
            if (id_old == 3) {
                poly_3.setFillPatternImage(i_3);
                layer_3.add(poly_3);
                stage_3.add(layer_3)
            }
            if (id_old == 4) {
                poly_4.setFillPatternImage(i_4);
                layer_4.add(poly_4);
                stage_4.add(layer_4)
            }
            if (id_old == 5) {
                poly_5.setFillPatternImage(i_5);
                layer_5.add(poly_5);
                stage_5.add(layer_5)
            }
            if (id_old == 6) {
                poly_6.setFillPatternImage(i_6);
                layer_6.add(poly_6);
                stage_6.add(layer_6)
            }
            if (id_old == 7) {
                poly_7.setFillPatternImage(i_7);
                layer_7.add(poly_7);
                stage_7.add(layer_7)
            }
            if (id_old == 8) {
                poly_8.setFillPatternImage(i_8);
                layer_8.add(poly_8);
                stage_8.add(layer_8)
            }
            showProjectOne(id)
        }, 10)
    }
}

function setMouseleaveMP(id) {
    $("#mp_" + id + "_title").css('display', 'none');
    if ($("#p_" + id).hasClass('doing')) {
        $("#p_" + id).removeClass('active');
        $("#mp_" + id).removeClass('active');
        hideProject(id, 0);
        $("#p_" + id + " .title").css('display', 'none');
        if (id == 1) {
            poly_1.setFillPatternImage(i_1);
            layer_1.add(poly_1);
            stage_1.add(layer_1)
        }
        if (id == 2) {
            poly_2.setFillPatternImage(i_2);
            layer_2.add(poly_2);
            stage_2.add(layer_2)
        }
        if (id == 3) {
            poly_3.setFillPatternImage(i_3);
            layer_3.add(poly_3);
            stage_3.add(layer_3)
        }
        if (id == 4) {
            poly_4.setFillPatternImage(i_4);
            layer_4.add(poly_4);
            stage_4.add(layer_4)
        }
        if (id == 5) {
            poly_5.setFillPatternImage(i_5);
            layer_5.add(poly_5);
            stage_5.add(layer_5)
        }
        if (id == 6) {
            poly_6.setFillPatternImage(i_6);
            layer_6.add(poly_6);
            stage_6.add(layer_6)
        }
        if (id == 7) {
            poly_7.setFillPatternImage(i_7);
            layer_7.add(poly_7);
            stage_7.add(layer_7)
        }
        if (id == 8) {
            poly_8.setFillPatternImage(i_8);
            layer_8.add(poly_8);
            stage_8.add(layer_8)
        }
    }
}

function setClickMP(id, time, delay) {
    setMenu(3);
    $("#menu_projects div").delay(delay).each(function(index) {
        $(this).removeClass('active')
    });
    $("#mp_" + id).addClass('active');
    if ($("#p_" + id).hasClass('doing')) {
        endProjectsAndShowOne(id, time, delay)
    } else if ($("#presentation").hasClass('active')) {
        setPresenationMP(0, id)
    } else if ($("#presentation_full").hasClass('active')) {
        setPresenationFullOut(0);
        setDotsPresenation();
        setPresenation(3000, id)
    } else if ($("#contact").hasClass('active')) {
        setContactOut(0);
        hideLines(500);
        setDotsPresenation();
        setPresenation(3000, id)
    } else if ($("#clients").hasClass('active')) {
        setClientsOut(0);
        hideLines(500);
        setDotsPresenation();
        setPresenation(3000, id)
    } else if ($("#aspects").hasClass('active')) {
        setAspectsOut(0);
        hideLines(500);
        setDotsPresenation();
        setPresenation(3000, id)
    }
}

function setMouseover(id) {
    if ($("#p_" + id).hasClass('doing')) {
        $("#p_" + id).css('cursor', 'pointer');
        $(".project").removeClass('active');
        $("#p_" + id).addClass('active hover');
        zindex++;
        $("#p_" + id).css('z-index', zindex);
        $("#mp_" + id).addClass('active');
        $("#p_" + id).stop();
        $("#p_" + id).css('opacity', '1.0');
        $("#p_" + id + " .title").shuffleLetters();
        $("#p_" + id + " .title").css('display', 'block');
        if (id == 1) {
            poly_1.setFillPatternImage(i_1_hover);
            layer_1.add(poly_1);
            stage_1.add(layer_1)
        }
        if (id == 2) {
            poly_2.setFillPatternImage(i_2_hover);
            layer_2.add(poly_2);
            stage_2.add(layer_2)
        }
        if (id == 3) {
            poly_3.setFillPatternImage(i_3_hover);
            layer_3.add(poly_3);
            stage_3.add(layer_3)
        }
        if (id == 4) {
            poly_4.setFillPatternImage(i_4_hover);
            layer_4.add(poly_4);
            stage_4.add(layer_4)
        }
        if (id == 5) {
            poly_5.setFillPatternImage(i_5_hover);
            layer_5.add(poly_5);
            stage_5.add(layer_5)
        }
        if (id == 6) {
            poly_6.setFillPatternImage(i_6_hover);
            layer_6.add(poly_6);
            stage_6.add(layer_6)
        }
        if (id == 7) {
            poly_7.setFillPatternImage(i_7_hover);
            layer_7.add(poly_7);
            stage_7.add(layer_7)
        }
        if (id == 8) {
            poly_8.setFillPatternImage(i_8_hover);
            layer_8.add(poly_8);
            stage_8.add(layer_8)
        }
    }
}

function setMouseout(id) {
    if ($("#p_" + id).hasClass('doing')) {
        $("#p_" + id).css('cursor', 'context-menu');
        if ($("#p_" + id).hasClass('doing')) {
            $("#p_" + id).removeClass('active');
            $("#mp_" + id).removeClass('active');
            hideProject(id, 0);
            $("#p_" + id + " .title").css('display', 'none');
            if (id == 1) {
                poly_1.setFillPatternImage(i_1);
                layer_1.add(poly_1);
                stage_1.add(layer_1)
            }
            if (id == 2) {
                poly_2.setFillPatternImage(i_2);
                layer_2.add(poly_2);
                stage_2.add(layer_2)
            }
            if (id == 3) {
                poly_3.setFillPatternImage(i_3);
                layer_3.add(poly_3);
                stage_3.add(layer_3)
            }
            if (id == 4) {
                poly_4.setFillPatternImage(i_4);
                layer_4.add(poly_4);
                stage_4.add(layer_4)
            }
            if (id == 5) {
                poly_5.setFillPatternImage(i_5);
                layer_5.add(poly_5);
                stage_5.add(layer_5)
            }
            if (id == 6) {
                poly_6.setFillPatternImage(i_6);
                layer_6.add(poly_6);
                stage_6.add(layer_6)
            }
            if (id == 7) {
                poly_7.setFillPatternImage(i_7);
                layer_7.add(poly_7);
                stage_7.add(layer_7)
            }
            if (id == 8) {
                poly_8.setFillPatternImage(i_8);
                layer_8.add(poly_8);
                stage_8.add(layer_8)
            }
        }
    }
}

function setMousemove(id) {
    if ($("#p_" + id).hasClass('doing')) {
        if ($("#p_" + id).hasClass('doing') && !$("#p_" + id).hasClass('active')) {
            $("#p_" + id).addClass('active');
            zindex++;
            $("#p_" + id).css('z-index', zindex);
            $("#mp_" + id).addClass('active');
            $("#p_" + id).stop();
            $("#p_" + id).css('opacity', '1.0');
            $("#p_" + id + " .title").shuffleLetters();
            $("#p_" + id + " .title").css('display', 'block');
            if (id == 1) {
                poly_1.setFillPatternImage(i_1_hover);
                layer_1.add(poly_1);
                stage_1.add(layer_1)
            }
            if (id == 2) {
                poly_2.setFillPatternImage(i_2_hover);
                layer_2.add(poly_2);
                stage_2.add(layer_2)
            }
            if (id == 3) {
                poly_3.setFillPatternImage(i_3_hover);
                layer_3.add(poly_3);
                stage_3.add(layer_3)
            }
            if (id == 4) {
                poly_4.setFillPatternImage(i_4_hover);
                layer_4.add(poly_4);
                stage_4.add(layer_4)
            }
            if (id == 5) {
                poly_5.setFillPatternImage(i_5_hover);
                layer_5.add(poly_5);
                stage_5.add(layer_5)
            }
            if (id == 6) {
                poly_6.setFillPatternImage(i_6_hover);
                layer_6.add(poly_6);
                stage_6.add(layer_6)
            }
            if (id == 7) {
                poly_7.setFillPatternImage(i_7_hover);
                layer_7.add(poly_7);
                stage_7.add(layer_7)
            }
            if (id == 8) {
                poly_8.setFillPatternImage(i_8_hover);
                layer_8.add(poly_8);
                stage_8.add(layer_8)
            }
        }
    }
}

function showProjectOne(id) {
    $("#p_" + id).addClass('doing');
    zindex++;
    $("#p_" + id).css('z-index', zindex);
    $("#p_" + id).addClass('active');
    $("#mp_" + id).addClass('active');
    $("#p_" + id).stop();
    $("#p_" + id).css('opacity', '1.0');
    $("#p_" + id + " .title").shuffleLetters();
    $("#p_" + id + " .title").css('display', 'block');
    if (id == 1) {
        poly_1.setFillPatternImage(i_1_hover);
        layer_1.add(poly_1);
        stage_1.add(layer_1)
    }
    if (id == 2) {
        poly_2.setFillPatternImage(i_2_hover);
        layer_2.add(poly_2);
        stage_2.add(layer_2)
    }
    if (id == 3) {
        poly_3.setFillPatternImage(i_3_hover);
        layer_3.add(poly_3);
        stage_3.add(layer_3)
    }
    if (id == 4) {
        poly_4.setFillPatternImage(i_4_hover);
        layer_4.add(poly_4);
        stage_4.add(layer_4)
    }
    if (id == 5) {
        poly_5.setFillPatternImage(i_5_hover);
        layer_5.add(poly_5);
        stage_5.add(layer_5)
    }
    if (id == 6) {
        poly_6.setFillPatternImage(i_6_hover);
        layer_6.add(poly_6);
        stage_6.add(layer_6)
    }
    if (id == 7) {
        poly_7.setFillPatternImage(i_7_hover);
        layer_7.add(poly_7);
        stage_7.add(layer_7)
    }
    if (id == 8) {
        poly_8.setFillPatternImage(i_8_hover);
        layer_8.add(poly_8);
        stage_8.add(layer_8)
    }
}

function showProject(id, delay) {
    if (!$("#presentation").hasClass('active')) {
        setTimeout(function() {
            action_transition = false;
            if ($(".project.doing").length == 0) {
                $("#p_" + id).addClass('doing');
                $("#mp_" + id).addClass('doing');
                zindex++;
                $("#p_" + id).css('z-index', zindex);
                $("#p_" + id).stop().delay(0).animate({
                    opacity: 1
                }, 2000, function() {
                    if (!$("#p_" + id).hasClass('active')) {
                        $("#p_" + id).animate({
                            opacity: 0
                        }, 2000, function() {
                            $("#p_" + id).removeClass('doing');
                            $("#p_" + id).css('z-index', '0');
                            $("#mp_" + id).removeClass('doing');
                            var new_id = id;
                            while (new_id == id) {
                                new_id = Math.floor((Math.random() * count_projects) + 1)
                            }
                            showProject(new_id, 0)
                        })
                    }
                })
            }
        }, delay)
    } else {}
}

function hideProject(id, delay) {
    if (!$("#p_" + id).hasClass('active')) {
        $("#p_" + id).delay(delay).animate({
            opacity: 0
        }, 2000, function() {
            $("#p_" + id).removeClass('doing');
            $("#mp_" + id).removeClass('doing');
            var new_id = id;
            while (new_id == id) {
                new_id = Math.floor((Math.random() * count_projects) + 1)
            }
            showProject(new_id, 0)
        })
    }
}

function endProjectsAndShowOne(id, time, delay) {
    if ($("#p_" + id).hasClass('active') || $("#browser_type").html() == "IE") {
        setUrl('#project' + id);
        $("#p_" + id).stop();
        $("#p_" + id).removeClass('doing');
        $("#p_" + id).removeClass('active');
        $("#mp_" + id).removeClass('doing');
        $("#mp_" + id).removeClass('active');
        $("#menu_projects div").delay(delay).each(function(index) {
            $(this).removeClass('active')
        });
        $(".project").delay(delay).animate({
            opacity: 0
        }, time, function() {});
        $("#mp_" + id).addClass('active');
        hideLines(500);
        setDotsPresenation();
        setPresenation(3000, id);
        if (id == 1) {
            poly_1.setFillPatternImage(i_1);
            layer_1.add(poly_1);
            stage_1.add(layer_1)
        }
        if (id == 2) {
            poly_2.setFillPatternImage(i_2);
            layer_2.add(poly_2);
            stage_2.add(layer_2)
        }
        if (id == 3) {
            poly_3.setFillPatternImage(i_3);
            layer_3.add(poly_3);
            stage_3.add(layer_3)
        }
        if (id == 4) {
            poly_4.setFillPatternImage(i_4);
            layer_4.add(poly_4);
            stage_4.add(layer_4)
        }
        if (id == 5) {
            poly_5.setFillPatternImage(i_5);
            layer_5.add(poly_5);
            stage_5.add(layer_5)
        }
        if (id == 6) {
            poly_6.setFillPatternImage(i_6);
            layer_6.add(poly_6);
            stage_6.add(layer_6)
        }
        if (id == 7) {
            poly_7.setFillPatternImage(i_7);
            layer_7.add(poly_7);
            stage_7.add(layer_7)
        }
        if (id == 8) {
            poly_8.setFillPatternImage(i_8);
            layer_8.add(poly_8);
            stage_8.add(layer_8)
        }
    } else {}
}

function endProjectsAndShowOneUrl(id, time, delay) {
    setUrl('#project' + id);
    $("#p_" + id).stop();
    $("#p_" + id).removeClass('doing');
    $("#p_" + id).removeClass('active');
    $("#mp_" + id).removeClass('doing');
    $("#mp_" + id).removeClass('active');
    $("#menu_projects div").delay(delay).each(function(index) {
        $(this).removeClass('active')
    });
    $(".project").delay(delay).animate({
        opacity: 0
    }, time, function() {});
    $("#mp_" + id).addClass('active');
    hideLines(500);
    setDotsPresenation();
    setPresenation(3000, id);
    if (id == 1) {
        poly_1.setFillPatternImage(i_1);
        layer_1.add(poly_1);
        stage_1.add(layer_1)
    }
    if (id == 2) {
        poly_2.setFillPatternImage(i_2);
        layer_2.add(poly_2);
        stage_2.add(layer_2)
    }
    if (id == 3) {
        poly_3.setFillPatternImage(i_3);
        layer_3.add(poly_3);
        stage_3.add(layer_3)
    }
    if (id == 4) {
        poly_4.setFillPatternImage(i_4);
        layer_4.add(poly_4);
        stage_4.add(layer_4)
    }
    if (id == 5) {
        poly_5.setFillPatternImage(i_5);
        layer_5.add(poly_5);
        stage_5.add(layer_5)
    }
    if (id == 6) {
        poly_6.setFillPatternImage(i_6);
        layer_6.add(poly_6);
        stage_6.add(layer_6)
    }
    if (id == 7) {
        poly_7.setFillPatternImage(i_7);
        layer_7.add(poly_7);
        stage_7.add(layer_7)
    }
    if (id == 8) {
        poly_8.setFillPatternImage(i_8);
        layer_8.add(poly_8);
        stage_8.add(layer_8)
    }
}

function endProjects(id, time, delay) {
    if ($("#p_" + id).hasClass('doing')) {
        $("#p_" + id).stop();
        $("#p_" + id).removeClass('doing');
        $("#p_" + id).removeClass('active');
        $("#mp_" + id).removeClass('doing');
        $("#mp_" + id).removeClass('active');
        $("#menu_projects div").delay(delay).each(function(index) {
            $(this).removeClass('active')
        });
        $(".project").delay(delay).animate({
            opacity: 0
        }, time, function() {});
        if (id == 1) {
            poly_1.setFillPatternImage(i_1);
            layer_1.add(poly_1);
            stage_1.add(layer_1)
        }
        if (id == 2) {
            poly_2.setFillPatternImage(i_2);
            layer_2.add(poly_2);
            stage_2.add(layer_2)
        }
        if (id == 3) {
            poly_3.setFillPatternImage(i_3);
            layer_3.add(poly_3);
            stage_3.add(layer_3)
        }
        if (id == 4) {
            poly_4.setFillPatternImage(i_4);
            layer_4.add(poly_4);
            stage_4.add(layer_4)
        }
        if (id == 5) {
            poly_5.setFillPatternImage(i_5);
            layer_5.add(poly_5);
            stage_5.add(layer_5)
        }
        if (id == 6) {
            poly_6.setFillPatternImage(i_6);
            layer_6.add(poly_6);
            stage_6.add(layer_6)
        }
        if (id == 7) {
            poly_7.setFillPatternImage(i_7);
            layer_7.add(poly_7);
            stage_7.add(layer_7)
        }
        if (id == 8) {
            poly_8.setFillPatternImage(i_8);
            layer_8.add(poly_8);
            stage_8.add(layer_8)
        }
    }
}
var i_presentation = new Image();
var poly_presentation = "";
i_presentation.src = '../foto/p1.jpg';
var i_contact = new Image();
var poly_contact = "";
i_contact.src = '../foto/contact.jpg';
var i_clients = new Image();
var poly_clients = "";
i_clients.src = '../foto/clients.jpg';
var i_aspects = new Image();
var poly_aspects = "";
i_aspects.src = '../foto/aspects.jpg';
var i_1 = new Image();
var i_1_hover = new Image();
var i_1_hover_p = new Image();
var poly_1;
i_1.src = '../foto/p1.jpg';
i_1_hover.src = '../foto/p1_hover.jpg';
i_1_hover_p.src = '../foto/p1_hover_presenation.jpg';
var i_2 = new Image();
var i_2_hover = new Image();
var i_2_hover_p = new Image();
var poly_2;
i_2.src = '../foto/p2.jpg';
i_2_hover.src = '../foto/p2_hover.jpg';
i_2_hover_p.src = '../foto/p2_hover_presenation.jpg';
var i_3 = new Image();
var i_3_hover = new Image();
var i_3_hover_p = new Image();
var poly_3;
i_3.src = '../foto/p3.jpg';
i_3_hover.src = '../foto/p3_hover.jpg';
i_3_hover_p.src = '../foto/p3_hover_presenation.jpg';
var i_4 = new Image();
var i_4_hover = new Image();
var i_4_hover_p = new Image();
var poly_4;
i_4.src = '../foto/p4.jpg';
i_4_hover.src = '../foto/p4_hover.jpg';
i_4_hover_p.src = '../foto/p4_hover_presenation.jpg';
var i_5 = new Image();
var i_5_hover = new Image();
var i_5_hover_p = new Image();
var poly_5;
i_5.src = '../foto/p5.jpg';
i_5_hover.src = '../foto/p5_hover.jpg';
i_5_hover_p.src = '../foto/p5_hover_presenation.jpg';
var i_6 = new Image();
var i_6_hover = new Image();
var i_6_hover_p = new Image();
var poly_6;
i_6.src = '../foto/p6.jpg';
i_6_hover.src = '../foto/p6_hover.jpg';
i_6_hover_p.src = '../foto/p6_hover_presenation.jpg';
var i_7 = new Image();
var i_7_hover = new Image();
var i_7_hover_p = new Image();
var poly_7;
i_7.src = '../foto/p7.jpg';
i_7_hover.src = '../foto/p7_hover.jpg';
i_7_hover_p.src = '../foto/p7_hover_presenation.jpg';
var i_8 = new Image();
var i_8_hover = new Image();
var i_8_hover_p = new Image();
var poly_8;
i_8.src = '../foto/p8.jpg';
i_8_hover.src = '../foto/p8_hover.jpg';
i_8_hover_p.src = '../foto/p8_hover_presenation.jpg';
var stage_presentation = new Kinetic.Stage({
    container: 'c_presentation',
    width: 943,
    height: 580
});
var layer_presentation = new Kinetic.Layer();
var stage_contact = new Kinetic.Stage({
    container: 'c_contact',
    width: 943,
    height: 580
});
var layer_contact = new Kinetic.Layer();
var stage_clients = new Kinetic.Stage({
    container: 'c_clients',
    width: 1280,
    height: 760
});
var layer_clients = new Kinetic.Layer();
var stage_aspects = new Kinetic.Stage({
    container: 'c_aspects',
    width: 1280,
    height: 850
});
var layer_aspects = new Kinetic.Layer();
var stage_1 = new Kinetic.Stage({
    container: 'c_1',
    width: 600,
    height: 300
});
var layer_1 = new Kinetic.Layer();
var stage_2 = new Kinetic.Stage({
    container: 'c_2',
    width: 300,
    height: 300
});
var layer_2 = new Kinetic.Layer();
var stage_3 = new Kinetic.Stage({
    container: 'c_3',
    width: 520,
    height: 430
});
var layer_3 = new Kinetic.Layer();
var stage_4 = new Kinetic.Stage({
    container: 'c_4',
    width: 640,
    height: 372
});
var layer_4 = new Kinetic.Layer();
var stage_5 = new Kinetic.Stage({
    container: 'c_5',
    width: 320,
    height: 350
});
var layer_5 = new Kinetic.Layer();
var stage_6 = new Kinetic.Stage({
    container: 'c_6',
    width: 400,
    height: 250
});
var layer_6 = new Kinetic.Layer();
var stage_7 = new Kinetic.Stage({
    container: 'c_7',
    width: 330,
    height: 290
});
var layer_7 = new Kinetic.Layer();
var stage_8 = new Kinetic.Stage({
    container: 'c_8',
    width: 290,
    height: 220
});
var layer_8 = new Kinetic.Layer();
i_1.onload = function() {
    poly_1 = new Kinetic.Polygon({
        points: [42, 1, 524, 147, 84, 261, 1, 36],
        fillPatternImage: i_1,
        fillPatternOffset: [200, 0],
        fillPatternScale: [0.5, 0.5]
    });
    poly_1.on('mouseover touchstart', function() {
        setMouseover(1)
    });
    poly_1.on('mousemove', function() {
        setMousemove(1)
    });
    poly_1.on('click', function() {
        endProjectsAndShowOne(1, 500, 0)
    });
    poly_1.on('mouseout touchend', function() {
        if (type_user == 'phone' || type_user == 'tablet') {
            setMousemove(1);
            setTimeout(function() {
                endProjectsAndShowOne(1, 500, 0)
            }, 1000)
        } else {
            setMouseout(1)
        }
    });
    layer_1.add(poly_1);
    stage_1.add(layer_1)
};
i_2.onload = function() {
    poly_2 = new Kinetic.Polygon({
        points: [0, 30, 216, 2, 284, 180, 5, 96],
        fillPatternImage: i_2,
        fillPatternOffset: [100, 200],
        fillPatternScale: [0.4, 0.4]
    });
    poly_2.on('mouseover touchstart', function() {
        setMouseover(2)
    });
    poly_2.on('mousemove', function() {
        setMousemove(2)
    });
    poly_2.on('click', function() {
        endProjectsAndShowOne(2, 500, 0)
    });
    poly_2.on('mouseout touchend', function() {
        if (type_user == 'phone' || type_user == 'tablet') {
            setMousemove(2);
            setTimeout(function() {
                endProjectsAndShowOne(2, 500, 0)
            }, 1000)
        } else {
            setMouseout(2)
        }
    });
    layer_2.add(poly_2);
    stage_2.add(layer_2)
};
i_3.onload = function() {
    poly_3 = new Kinetic.Polygon({
        points: [1, 115, 440, 1, 511, 23, 303, 424, 254, 417, 77, 319],
        fillPatternImage: i_3,
        fillPatternOffset: [150, 100],
        fillPatternScale: [1, 1]
    });
    poly_3.on('mouseover touchstart', function() {
        setMouseover(3)
    });
    poly_3.on('mousemove', function() {
        setMousemove(3)
    });
    poly_3.on('click', function() {
        endProjectsAndShowOne(3, 500, 0)
    });
    poly_3.on('mouseout touchend', function() {
        if (type_user == 'phone' || type_user == 'tablet') {
            setMousemove(3);
            setTimeout(function() {
                endProjectsAndShowOne(3, 500, 0)
            }, 1000)
        } else {
            setMouseout(3)
        }
    });
    layer_3.add(poly_3);
    stage_3.add(layer_3)
};
i_4.onload = function() {
    poly_4 = new Kinetic.Polygon({
        points: [1, 226, 260, 3, 626, 260, 582, 347, 482, 372],
        fillPatternImage: i_4,
        fillPatternOffset: [100, 0],
        fillPatternScale: [0.7, 0.7]
    });
    poly_4.on('mouseover touchstart', function() {
        setMouseover(4)
    });
    poly_4.on('mousemove', function() {
        setMousemove(4)
    });
    poly_4.on('click', function() {
        endProjectsAndShowOne(4, 500, 0)
    });
    poly_4.on('mouseout touchend', function() {
        if (type_user == 'phone' || type_user == 'tablet') {
            setMousemove(4);
            setTimeout(function() {
                endProjectsAndShowOne(4, 500, 0)
            }, 1000)
        } else {
            setMouseout(4)
        }
    });
    layer_4.add(poly_4);
    stage_4.add(layer_4)
};
i_5.onload = function() {
    poly_5 = new Kinetic.Polygon({
        points: [0, 1, 278, 85, 298, 138, 59, 345, 20, 324],
        fillPatternImage: i_5,
        fillPatternOffset: [280, 0],
        fillPatternScale: [0.6, 0.6]
    });
    poly_5.on('mouseover touchstart', function() {
        setMouseover(5)
    });
    poly_5.on('mousemove', function() {
        setMousemove(5)
    });
    poly_5.on('click', function() {
        endProjectsAndShowOne(5, 500, 0)
    });
    poly_5.on('mouseout touchend', function() {
        if (type_user == 'phone' || type_user == 'tablet') {
            setMousemove(5);
            setTimeout(function() {
                endProjectsAndShowOne(5, 500, 0)
            }, 1000)
        } else {
            setMouseout(5)
        }
    });
    layer_5.add(poly_5);
    stage_5.add(layer_5)
};
i_6.onload = function() {
    poly_6 = new Kinetic.Polygon({
        points: [0, 48, 358, 0, 388, 20, 128, 245, 69, 228],
        fillPatternImage: i_6,
        fillPatternOffset: [50, 0],
        fillPatternScale: [0.41, 0.41]
    });
    poly_6.on('mouseover touchstart', function() {
        setMouseover(6)
    });
    poly_6.on('mousemove', function() {
        setMousemove(6)
    });
    poly_6.on('click', function() {
        endProjectsAndShowOne(6, 500, 0)
    });
    poly_6.on('mouseout touchend', function() {
        if (type_user == 'phone' || type_user == 'tablet') {
            setMousemove(6);
            setTimeout(function() {
                endProjectsAndShowOne(6, 500, 0)
            }, 1000)
        } else {
            setMouseout(6)
        }
    });
    layer_6.add(poly_6);
    stage_6.add(layer_6)
};
i_7.onload = function() {
    poly_7 = new Kinetic.Polygon({
        points: [241, 2, 324, 226, 126, 277, 3, 208],
        fillPatternImage: i_7,
        fillPatternOffset: [0, 0],
        fillPatternScale: [0.5, 0.5]
    });
    poly_7.on('mouseover touchstart', function() {
        setMouseover(7)
    });
    poly_7.on('mousemove', function() {
        setMousemove(7)
    });
    poly_7.on('click', function() {
        endProjectsAndShowOne(7, 500, 0)
    });
    poly_7.on('mouseout touchend', function() {
        if (type_user == 'phone' || type_user == 'tablet') {
            setMousemove(7);
            setTimeout(function() {
                endProjectsAndShowOne(7, 500, 0)
            }, 1000)
        } else {
            setMouseout(7)
        }
    });
    layer_7.add(poly_7);
    stage_7.add(layer_7)
};
i_8.onload = function() {
    poly_8 = new Kinetic.Polygon({
        points: [200, 2, 276, 205, 3, 53],
        fillPatternImage: i_8,
        fillPatternOffset: [50, 0],
        fillPatternScale: [0.41, 0.41]
    });
    poly_8.on('mouseover touchstart', function() {
        setMouseover(8)
    });
    poly_8.on('mousemove', function() {
        setMousemove(8)
    });
    poly_8.on('click', function() {
        endProjectsAndShowOne(8, 500, 0)
    });
    poly_8.on('mouseout touchend', function() {
        if (type_user == 'phone' || type_user == 'tablet') {
            setMousemove(8);
            setTimeout(function() {
                endProjectsAndShowOne(8, 500, 0)
            }, 1000)
        } else {
            setMouseout(8)
        }
    });
    layer_8.add(poly_8);
    stage_8.add(layer_8)
};
i_presentation.onload = function() {
    poly_presentation = new Kinetic.Polygon({
        points: [578, 0, 943, 258, 898, 346, 4, 578, 0, 500],
        fillPatternOffset: [0, 0]
    });
    poly_presentation.on('mouseover touchstart', function() {
        setPresenationHover();
        $('#presentation').css('cursor', 'pointer')
    });
    poly_presentation.on('mouseout touchend', function() {
        setPresenationHoverOver();
        $('#presentation').css('cursor', 'context-menu')
    });
    poly_presentation.on('mouseout touchend', function() {
        if (type_user == 'phone' || type_user == 'tablet') {
            setPresenationOut(0);
            hideLines(1000);
            setDotsPresenationFull(1500);
            setPresenationFull(2000)
        }
    });
    poly_presentation.on('click', function() {
        setPresenationOut(0);
        hideLines(1000);
        setDotsPresenationFull(1500);
        setPresenationFull(2000)
    });
    layer_presentation.add(poly_presentation);
    stage_presentation.add(layer_presentation)
};
i_contact.onload = function() {
    poly_contact = new Kinetic.Polygon({
        points: [187, 48, 547, 0, 945, 279, 898, 369, 361, 507],
        fillPatternOffset: [-130, 0]
    });
    layer_contact.add(poly_contact);
    stage_contact.add(layer_contact)
};
i_clients.onload = function() {
    poly_clients = new Kinetic.Polygon({
        points: [205, 80, 779, 3, 1174, 282, 1130, 368, 394, 560, 230, 470],
        fillPatternOffset: [-200, 0]
    });
    layer_clients.add(poly_clients);
    stage_clients.add(layer_clients)
};
i_aspects.onload = function() {
    poly_aspects = new Kinetic.Polygon({
        points: [205, 80, 779, 3, 1174, 282, 888, 834, 230, 470],
        fillPatternOffset: [-200, 0]
    });
    layer_aspects.add(poly_aspects);
    stage_aspects.add(layer_aspects)
};
var points = [],
    velocity2 = 5,
    canvas = document.getElementById('loading'),
    context = canvas.getContext('2d'),
    radius = 2,
    boundaryX = 100,
    boundaryY = 100,
    numberOfPoints = 50;

function init() {
    for (var i = 0; i < numberOfPoints; i++) {
        createPoint()
    }
    for (var i = 0, l = points.length; i < l; i++) {
        var point = points[i];
        if (i == 0) {
            points[i].buddy = points[points.length - 1]
        } else {
            points[i].buddy = points[i - 1]
        }
    }
    animate()
}

function createPoint() {
    var point = {},
        vx2, vy2;
    point.x = Math.random() * boundaryX;
    point.y = Math.random() * boundaryY;
    point.vx = (Math.floor(Math.random()) * 2 - 1) * Math.random();
    vx2 = Math.pow(point.vx, 2);
    vy2 = velocity2 - vx2;
    point.vy = Math.sqrt(vy2) * (Math.random() * 2 - 1);
    points.push(point)
}

function resetVelocity(point, axis, dir) {
    var vx, vy;
    if (axis == 'x') {
        point.vx = dir * Math.random();
        vx2 = Math.pow(point.vx, 2);
        vy2 = velocity2 - vx2;
        point.vy = Math.sqrt(vy2) * (Math.random() * 2 - 1)
    } else {
        point.vy = dir * Math.random();
        vy2 = Math.pow(point.vy, 2);
        vx2 = velocity2 - vy2;
        point.vx = Math.sqrt(vx2) * (Math.random() * 2 - 1)
    }
}

function drawCircle(x, y) {
    context.beginPath();
    context.arc(x, y, radius, 0, 2 * Math.PI, false);
    context.fillStyle = '#3CDBC0';
    context.fill()
}

function drawLine(x1, y1, x2, y2) {
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.strokeStyle = '#3CDBC0';
    context.stroke()
}

function draw() {
    for (var i = 0, l = points.length; i < l; i++) {
        var point = points[i];
        point.x += point.vx;
        point.y += point.vy;
        drawCircle(point.x, point.y);
        drawLine(point.x, point.y, point.buddy.x, point.buddy.y);
        if (point.x < 0 + radius) {
            resetVelocity(point, 'x', 1)
        } else if (point.x > boundaryX - radius) {
            resetVelocity(point, 'x', -1)
        } else if (point.y < 0 + radius) {
            resetVelocity(point, 'y', 1)
        } else if (point.y > boundaryY - radius) {
            resetVelocity(point, 'y', -1)
        }
    }
}

function animate() {
    context.clearRect(0, 0, 200, 200);
    draw();
    requestAnimationFrame(animate)
}

function GETescaped_fragment(nazwa) {
    var url = location.href;
    url = unescape(url);
    var lenght_nazwa = nazwa.length;
    var pos = url.indexOf(nazwa);
    if (pos != -1) {
        var start = pos + lenght_nazwa + 1;
        var end = url.indexOf('|', start);
        if (end == -1) {
            end = url.length
        }
        return url.substring(start, end)
    } else {
        return 'brak'
    }
}

function initialize() {
    $(window).resize();
    setDots(0);
    showLines(1000);
    var url = location.href;
    url = unescape(url);
    var start_escaped_fragment = url.indexOf('#');
    var end_url = url.length;
    var url_nowe = url.substring(start_escaped_fragment + 1, end_url);
    if (url_nowe == 'aspects') {
        setTimeout(function() {
            action_transition = true;
            setMenu(4);
            setClickAspects()
        }, 1000)
    } else if (url_nowe == 'clients') {
        setTimeout(function() {
            action_transition = true;
            setMenu(2);
            setClickClients()
        }, 1000)
    } else if (url_nowe == 'contact') {
        setTimeout(function() {
            action_transition = true;
            setMenu(1);
            setClickContact()
        }, 1000)
    } else if (url_nowe == 'project1') {
        setTimeout(function() {
            endProjectsAndShowOneUrl(1, 500, 0)
        }, 1000)
    } else if (url_nowe == 'project2') {
        setTimeout(function() {
            endProjectsAndShowOneUrl(2, 500, 0)
        }, 1000)
    } else if (url_nowe == 'project3') {
        setTimeout(function() {
            endProjectsAndShowOneUrl(3, 500, 0)
        }, 1000)
    } else if (url_nowe == 'project4') {
        setTimeout(function() {
            endProjectsAndShowOneUrl(4, 500, 0)
        }, 1000)
    } else if (url_nowe == 'project5') {
        setTimeout(function() {
            endProjectsAndShowOneUrl(5, 500, 0)
        }, 1000)
    } else if (url_nowe == 'project6') {
        setTimeout(function() {
            endProjectsAndShowOneUrl(6, 500, 0)
        }, 1000)
    } else if (url_nowe == 'project7') {
        setTimeout(function() {
            endProjectsAndShowOneUrl(7, 500, 0)
        }, 1000)
    } else if (url_nowe == 'project8') {
        setTimeout(function() {
            endProjectsAndShowOneUrl(8, 500, 0)
        }, 1000)
    } else {
        startPresentation(0)
    }
}
$(document).ready(function() {
    $(window).resize(function() {
        UstawPanel();
        setVideo();
        return false
    });
    init();
    var min_opera_version = 7;
    var min_chrome_version = 7;
    var min_safari_version = 6;
    var min_firefox_version = 10;
    var min_msie_version = 9;
    var b = get_browser();
    var bv = get_browser_version();
    var teraz = new Date();
    var info = '';
    var stop = false;
    if (b.indexOf("IE") != -1) {
        b = 'IE'
    }
    bv = bv.replace(/[A-Za-z$-]/g, "");
    if (b == 'Chrome') {
        if (min_chrome_version > bv) {
            stop = true
        }
    } else if (b == "IE") {
        if (min_msie_version > bv) {
            stop = true
        }
    } else if (b == 'Safari') {
        if (min_safari_version > bv) {
            stop = true
        }
    } else if (b == 'Firefox') {
        if (min_firefox_version > bv) {
            stop = true
        }
    } else if (b == 'Opera') {
        if (min_opera_version > bv) {
            stop = true
        }
    }
    $("#browser_type").html(b);
    if (stop == true) {
        $('#info_browser').css('display', 'block')
    } else {
        $('#info_browser').css('display', 'none')
    }
    $("#mp_1").on('mouseenter', function() {
        setMouseenterMP(1)
    });
    $("#mp_1").on('mouseleave', function() {
        setMouseleaveMP(1)
    });
    $("#mp_1").on('click', function() {
        if (type_user == 'phone') {
            setMouseenterMP(1);
            setTimeout(function() {
                setUrl('#project1');
                setClickMP(1, 500, 0)
            }, 50)
        } else {
            setUrl('#project1');
            if (!action_transition) {
                action_transition = true;
                setClickMP(1, 500, 0)
            }
        }
    });
    $("#mp_2").on('mouseenter', function() {
        setMouseenterMP(2)
    });
    $("#mp_2").on('mouseleave', function() {
        setMouseleaveMP(2)
    });
    $("#mp_2").on('click', function() {
        if (type_user == 'phone') {
            setMouseenterMP(2);
            setTimeout(function() {
                setUrl('#project2');
                setClickMP(2, 500, 0)
            }, 50)
        } else {
            setUrl('#project2');
            if (!action_transition) {
                action_transition = true;
                setClickMP(2, 500, 0)
            }
        }
    });
    $("#mp_3").on('mouseenter', function() {
        setMouseenterMP(3)
    });
    $("#mp_3").on('mouseleave', function() {
        setMouseleaveMP(3)
    });
    $("#mp_3").on('click', function() {
        if (type_user == 'phone') {
            setMouseenterMP(3);
            setTimeout(function() {
                setUrl('#project3');
                setClickMP(3, 500, 0)
            }, 50)
        } else {
            setUrl('#project3');
            if (!action_transition) {
                action_transition = true;
                setClickMP(3, 500, 0)
            }
        }
    });
    $("#mp_4").on('mouseenter', function() {
        setMouseenterMP(4)
    });
    $("#mp_4").on('mouseleave', function() {
        setMouseleaveMP(4)
    });
    $("#mp_4").on('click', function() {
        if (type_user == 'phone') {
            setMouseenterMP(4);
            setTimeout(function() {
                setUrl('#project4');
                setClickMP(4, 500, 0)
            }, 50)
        } else {
            setUrl('#project4');
            if (!action_transition) {
                action_transition = true;
                setClickMP(4, 500, 0)
            }
        }
    });
    $("#mp_5").on('mouseenter', function() {
        setMouseenterMP(5)
    });
    $("#mp_5").on('mouseleave', function() {
        setMouseleaveMP(5)
    });
    $("#mp_5").on('click', function() {
        if (type_user == 'phone') {
            setMouseenterMP(5);
            setTimeout(function() {
                setUrl('#project5');
                setClickMP(5, 500, 0)
            }, 50)
        } else {
            setUrl('#project5');
            if (!action_transition) {
                action_transition = true;
                setClickMP(5, 500, 0)
            }
        }
    });
    $("#mp_6").on('mouseenter', function() {
        setMouseenterMP(6)
    });
    $("#mp_6").on('mouseleave', function() {
        setMouseleaveMP(6)
    });
    $("#mp_6").on('click', function() {
        if (type_user == 'phone') {
            setMouseenterMP(6);
            setTimeout(function() {
                setUrl('#project6');
                setClickMP(6, 500, 0)
            }, 50)
        } else {
            setUrl('#project6');
            if (!action_transition) {
                action_transition = true;
                setClickMP(6, 500, 0)
            }
        }
    });
    $("#mp_7").on('mouseenter', function() {
        setMouseenterMP(7)
    });
    $("#mp_7").on('mouseleave', function() {
        setMouseleaveMP(7)
    });
    $("#mp_7").on('click', function() {
        if (type_user == 'phone') {
            setMouseenterMP(7);
            setTimeout(function() {
                setUrl('#project7');
                setClickMP(7, 500, 0)
            }, 50)
        } else {
            setUrl('#project7');
            if (!action_transition) {
                action_transition = true;
                setClickMP(7, 500, 0)
            }
        }
    });
    $("#mp_8").on('mouseenter', function() {
        setMouseenterMP(8)
    });
    $("#mp_8").on('mouseleave', function() {
        setMouseleaveMP(8)
    });
    $("#mp_8").on('click', function() {
        setUrl('#project8');
        if (!action_transition) {
            action_transition = true;
            setClickMP(8, 500, 0)
        }
    });
    $("#mp_8").on('click', function() {
        if (type_user == 'phone') {
            setMouseenterMP(8);
            setTimeout(function() {
                setUrl('#project8');
                setClickMP(8, 500, 0)
            }, 50)
        } else {
            setUrl('#project8');
            if (!action_transition) {
                action_transition = true;
                setClickMP(8, 500, 0)
            }
        }
    });
    $("#presentation_close").on('click', function() {
        setMenu(3);
        setPresenationOut(0);
        showProject(1, 1500);
        setUrl('#projects');
        $("#menu_projects div").each(function(index) {
            $(this).removeClass('active')
        })
    });
    $("#presentation_site").on('click', function() {
        setPresenationOut(0);
        hideLines(1000);
        setDotsPresenationFull(1500);
        setPresenationFull(2000)
    });
    $("#presentation_full_close").on('click', function() {
        setMenu(3);
        setDots(0);
        showLines(1000);
        setPresenationFullOut(0);
        showProject(1, 1500);
        setUrl('#projects');
        $("#menu_projects div").each(function(index) {
            $(this).removeClass('active')
        })
    });
    $("#presentation_full_next").on('click', function() {
        $("#presentation_full_loading").fadeIn(200);
        $.ajax({
            url: "SerwletAjax.php",
            type: "POST",
            async: false,
            data: ({
                f: 'getPresentation',
                id: presentation_id,
                index: presentation_index,
                way: "next",
                type: type
            }),
            success: function(data) {
                setTimeout(function() {
                    $("#presentation_full_view").html(data);
                    $("#Zcube").css("-webkit-transform", "rotateZ(" + zcube + "deg)");
                    $("#Ycube").css("-webkit-transform", "rotateY(" + ycube + "deg)");
                    $("#cube").css("-webkit-transform", "rotateX(" + xcube + "deg)");
                    $("#Zcube").css("-moz-transform", "rotateZ(" + zcube + "deg)");
                    $("#Ycube").css("-moz-transform", "rotateY(" + ycube + "deg)");
                    $("#cube").css("-moz-transform", "rotateX(" + xcube + "deg)");
                    $("#Zcube").css("-ms-transform", "rotateZ(" + zcube + "deg)");
                    $("#Ycube").css("-ms-transform", "rotateY(" + ycube + "deg)");
                    $("#cube").css("-ms-transform", "rotateX(" + xcube + "deg)");
                    $("#presentation_full_index").html(presentation_index + '/' + presentation_size);
                    setVideo();
                    $("#presentation_full_loading").delay(500).fadeOut(500);
                    setTimeout(function() {
                        $("#presentation_title_bottom").shuffleLetters()
                    }, 500);
                    setTimeout(function() {
                        $("#presentation_title_site").shuffleLetters()
                    }, 500)
                }, 250)
            }
        }).responseText
    });
    $("#presentation_full_prev").on('click', function() {
        $("#presentation_full_loading").fadeIn(10);
        $.ajax({
            url: "SerwletAjax.php",
            type: "POST",
            async: false,
            data: ({
                f: 'getPresentation',
                id: presentation_id,
                index: presentation_index,
                way: "prev",
                type: type
            }),
            success: function(data) {
                $("#presentation_full_view").html(data);
                $("#Zcube").css("-webkit-transform", "rotateZ(" + zcube + "deg)");
                $("#Ycube").css("-webkit-transform", "rotateY(" + ycube + "deg)");
                $("#cube").css("-webkit-transform", "rotateX(" + xcube + "deg)");
                $("#Zcube").css("-moz-transform", "rotateZ(" + zcube + "deg)");
                $("#Ycube").css("-moz-transform", "rotateY(" + ycube + "deg)");
                $("#cube").css("-moz-transform", "rotateX(" + xcube + "deg)");
                $("#Zcube").css("-ms-transform", "rotateZ(" + zcube + "deg)");
                $("#Ycube").css("-ms-transform", "rotateY(" + ycube + "deg)");
                $("#cube").css("-ms-transform", "rotateX(" + xcube + "deg)");
                $("#presentation_full_index").html(presentation_index + '/' + presentation_size);
                setVideo();
                $("#presentation_full_loading").delay(500).fadeOut(500);
                setTimeout(function() {
                    $("#presentation_title_bottom").shuffleLetters()
                }, 500);
                setTimeout(function() {
                    $("#presentation_title_site").shuffleLetters()
                }, 500)
            }
        }).responseText
    });
    $("#presentation_phone, #presentation_tablet, #presentation_screen").on('click', function() {
        if (!action_transition) {
            action_transition = true;
            $("#presentation_phone").removeClass('active');
            $("#presentation_tablet").removeClass('active');
            $("#presentation_screen").removeClass('active');
            if ($(this).attr('id') == "presentation_phone") {
                type = 'phone';
                $("#presentation_phone").addClass('active')
            } else if ($(this).attr('id') == "presentation_tablet") {
                type = 'tablet';
                $("#presentation_tablet").addClass('active')
            } else if ($(this).attr('id') == "presentation_screen") {
                type = 'screen';
                $("#presentation_screen").addClass('active')
            }
            $("#presentation_full_loading").fadeIn(200);
            $.ajax({
                url: "SerwletAjax.php",
                type: "POST",
                async: false,
                data: ({
                    f: 'getPresentation',
                    id: presentation_id,
                    index: presentation_index,
                    way: "here",
                    type: type
                }),
                success: function(data) {
                    setTimeout(function() {
                        $("#presentation_full_view").html(data);
                        $("#Zcube").css("-webkit-transform", "rotateZ(" + zcube + "deg)");
                        $("#Ycube").css("-webkit-transform", "rotateY(" + ycube + "deg)");
                        $("#cube").css("-webkit-transform", "rotateX(" + xcube + "deg)");
                        $("#Zcube").css("-moz-transform", "rotateZ(" + zcube + "deg)");
                        $("#Ycube").css("-moz-transform", "rotateY(" + ycube + "deg)");
                        $("#cube").css("-moz-transform", "rotateX(" + xcube + "deg)");
                        $("#Zcube").css("-ms-transform", "rotateZ(" + zcube + "deg)");
                        $("#Ycube").css("-ms-transform", "rotateY(" + ycube + "deg)");
                        $("#cube").css("-ms-transform", "rotateX(" + xcube + "deg)");
                        $("#presentation_full_index").html(presentation_index + '/' + presentation_size);
                        setVideo();
                        $("#presentation_full_loading").delay(500).fadeOut(500);
                        setTimeout(function() {
                            $("#presentation_title_bottom").shuffleLetters()
                        }, 500);
                        setTimeout(function() {
                            $("#presentation_title_site").shuffleLetters();
                            action_transition = false
                        }, 500)
                    }, 200)
                }
            }).responseText
        }
    });
    $("#m_1").on('click', function() {
        if (!action_transition) {
            action_transition = true;
            setMenu(1);
            setClickContact()
        }
    });
    $("#contact_close").on('click', function() {
        if (!action_transition) {
            action_transition = true;
            setMenu(3);
            setContactOut(0);
            showProject(1, 1500);
            $("#menu_projects div").each(function(index) {
                $(this).removeClass('active')
            })
        }
    });
    $("#send").on('click', function() {
        var poprawny = true;
        if ($("#name").val() == "") {
            poprawny = false;
            $("#name").addClass('error')
        } else {
            $("#name").removeClass('error')
        }
        if ($("#email").val() == "") {
            poprawny = false;
            $("#email").addClass('error')
        } else {
            $("#email").removeClass('error')
        }
        if ($("#company").val() == "") {
            poprawny = false;
            $("#company").addClass('error')
        } else {
            $("#company").removeClass('error')
        }
        if ($("#phone").val() == "") {
            poprawny = false;
            $("#phone").addClass('error')
        } else {
            $("#phone").removeClass('error')
        }
        if ($("#message").val() == "") {
            poprawny = false;
            $("#message").addClass('error')
        } else {
            $("#name").removeClass('message')
        }
        if (poprawny) {
            $.ajax({
                url: "SerwletAjax.php",
                type: "POST",
                async: false,
                data: ({
                    f: 'send',
                    lang: "en",
                    name: $("#name").val(),
                    email: $("#email").val(),
                    company: $("#company").val(),
                    phone: $("#phone").val(),
                    message: $("#message").val()
                }),
                success: function(data) {
                    $("#contact_form, #contact_description").animate({
                        opacity: 0.0
                    }, 500, function() {
                        $("#contact_description").html(data);
                        $("#contact_description").css('opacity', '1.0');
                        $("#contact_description").shuffleLetters()
                    })
                }
            })
        }
    });
    $("#m_2").on('click', function() {
        if (!action_transition) {
            action_transition = true;
            setMenu(2);
            setClickClients()
        }
    });
    $("#clients_close").on('click', function() {
        if (!action_transition) {
            action_transition = true;
            setMenu(3);
            setClientsOut(0);
            showProject(1, 1500);
            $("#menu_projects div").each(function(index) {
                $(this).removeClass('active')
            })
        }
    });
    $("#m_3, #logo").on('click', function() {
        if (!action_transition) {
            action_transition = true;
            setUrl('#projects');
            setMenu(3);
            setClickProjects()
        }
    });
    $("#presentation_icons, #presentation_icons_link").on('click', function() {
        $("#m_4").click()
    });
    $("#presentation_icons").on('mouseenter', '.icon', function() {
        $("#presentation_icons_link_specific").text($(this).attr('data-title'));
        $('#presentation_icons_link_specific').attr('data-static', $(this).attr('data-title'))
    });
    $("#presentation_icons").on('mouseleave', '.icon', function() {
        $("#presentation_icons_link_specific").text('')
    });
    $("#presentation_icons").on('mouseenter', function() {
        $(this).addClass('hover')
    });
    $("#presentation_icons").on('mouseleave', function() {
        $(this).removeClass('hover')
    });
    $("#m_4").on('click', function() {
        if (!action_transition) {
            action_transition = true;
            setMenu(4);
            setClickAspects()
        }
    });
    $("#aspects_close").on('click', function() {
        if (!action_transition) {
            action_transition = true;
            setMenu(3);
            setAspectsOut(0);
            showProject(1, 1500);
            $("#menu_projects div").each(function(index) {
                $(this).removeClass('active')
            })
        }
    });
    $("#aspects ul li").on('click', function() {
        $("#aspects ul li").each(function(index) {
            $(this).removeClass('active');
            $(this).find('p').hide()
        });
        $(this).addClass('active');
        $(this).find('p').show();
        $(this).find('p').shuffleLetters()
    });
    $('#td3controls #td3xrot').change(function() {
        $('#cube').css("transform", "rotateX(" + $('#td3controls input#td3xrot').val() + "deg)");
        $('label[for="td3xrot"]').html("X rotation (" + $('#td3controls input#td3xrot').val() + " deg)")
    });
    $('#td3controls #td3yrot').change(function() {
        $('#Ycube').css("transform", "rotateY(" + $('#td3controls input#td3yrot').val() + "deg)");
        $('label[for="td3yrot"]').html("Y rotation (" + $('#td3controls input#td3yrot').val() + " deg)")
    });
    $('#td3controls #td3zrot').change(function() {
        $('#Zcube').css("transform", "rotateZ(" + $('#td3controls input#td3zrot').val() + "deg)");
        $('label[for="td3zrot"]').html("Z rotation (" + $('#td3controls input#td3zrot').val() + " deg)")
    });
    $('#td3controls #td3perspective').change(function() {
        $('#contener3d').css("perspective", $('#td3controls input#td3perspective').val() + "px");
        $('label[for="td3perspective"]').html("Perspective (" + $('#td3controls input#td3perspective').val() + " px)")
    });
    $(document).on("mousemove", function(event) {
        zcube = -10;
        ycube = 30 + (event.pageX - $(window).height()) / 300;
        xcube = 35 - (event.pageY) / 200;
        $("#position").html("pageX: " + event.pageX + "<br />pageY: " + event.pageY + "<br />width: " + $(window).width() + "<br />height: " + $(window).height() + "<br />z: " + zcube + "<br />y: " + ycube + "<br />x: " + xcube);
        $("#Zcube").css("-webkit-transform", "rotateZ(" + zcube + "deg)");
        $("#Ycube").css("-webkit-transform", "rotateY(" + ycube + "deg)");
        $("#cube").css("-webkit-transform", "rotateX(" + xcube + "deg)");
        $("#Zcube").css("-moz-transform", "rotateZ(" + zcube + "deg)");
        $("#Ycube").css("-moz-transform", "rotateY(" + ycube + "deg)");
        $("#cube").css("-moz-transform", "rotateX(" + xcube + "deg)");
        $("#Zcube").css("-o-transform", "rotateZ(" + zcube + "deg)");
        $("#Ycube").css("-o-transform", "rotateY(" + ycube + "deg)");
        $("#cube").css("-o-transform", "rotateX(" + xcube + "deg)");
        $("#Zcube").css("-ms-transform", "rotateZ(" + zcube + "deg)");
        $("#Ycube").css("-ms-transform", "rotateY(" + ycube + "deg)");
        $("#cube").css("-ms-transform", "rotateX(" + xcube + "deg)");
        $("#Zcube").css("transform", "rotateZ(" + zcube + "deg)");
        $("#Ycube").css("transform", "rotateY(" + ycube + "deg)");
        $("#cube").css("transform", "rotateX(" + xcube + "deg)")
    })
});
window.onload = function() {
    initialize()
};
$(document).keydown(function(event) {
    if (event.keyCode == '39') {
        $("#presentation_full_next").click()
    }
    if (event.keyCode == '37') {
        $("#presentation_full_prev").click()
    }
});
