$(document).ready(function()
{
	"use strict";

	/* Vars and Inits */

	var header = $('.header');
	var hamb = $('.hamburger');
	var hambActive = false;
	var menuActive = false;

	setHeader();

	$(window).on('resize', function()
	{
		setHeader();
	});

	$(document).on('scroll', function()
	{
		setHeader();
	});

	initMenu();
	initHomeSlider();
	initSvg();

	/* Set Header */

	function setHeader()
	{
		if($(window).scrollTop() > 100)
		{
			header.addClass('scrolled');
		}
		else
		{
			header.removeClass('scrolled');
		}
	}

	/* Init Menu */

	function initMenu()
	{
		if($('.hamburger').length)
		{
			var hamb = $('.hamburger');

			hamb.on('click', function(event)
			{
				event.stopPropagation();

				if(!menuActive)
				{
					openMenu();
					
					$(document).one('click', function cls(e)
					{
						if($(e.target).hasClass('menu_mm'))
						{
							$(document).one('click', cls);
						}
						else
						{
							closeMenu();
						}
					});
				}
				else
				{
					$('.menu-container').removeClass('active');
					menuActive = false;
				}
			});
		}
	}

	function openMenu()
	{
		var fs = $('.menu-container');
		fs.addClass('active');
		hambActive = true;
		menuActive = true;
	}

	function closeMenu()
	{
		var fs = $('.menu-container');
		fs.removeClass('active');
		hambActive = false;
		menuActive = false;
	}


});