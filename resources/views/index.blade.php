<!--A Design by W3layouts
Author: W3layout
Author URL: http://w3layouts.com
License: Creative Commons Attribution 3.0 Unported
License URL: http://creativecommons.org/licenses/by/3.0/
-->
<!DOCTYPE html>
<html lang="en">
<head>
	<title>Empire Foods and Drinks</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<script type="application/x-javascript">
		addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false);
		function hideURLbar(){ window.scrollTo(0,1); }
	</script>
	{!! Html::style('css/all.css') !!}
	{!! Html::script('js/all.js') !!}
	<!-- can't mix -->
	{!! Html::script('js/jquery-2.2.3.min.js') !!}
	{!! Html::script('js/responsiveslides.min.js') !!}	
	{!! Html::script('js/bootstrap.min.js') !!}
</head>
<body>
	<div class="header-w3layouts" id="home">
		<nav class="navbar navbar-default navbar-fixed-top">
			<div class="navbar-header page-scroll">
				<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
					<span class="sr-only"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
				<h1><a class="navbar-brand" href="index">{{ trans('message.fd') }}</a></h1>
				<div class="search col-md-6">
                {!! Form::open(['url' => '', 'class' => 'Search']) !!}
                    {!! Form::text('Search-box', null, ['id' => 'Search-box', 'class' => 'form-control Search-box', 'placeholder' => trans('message.search')]) !!}
                {!! Form::close() !!}
            	</div>
			</div>
			<div class="collapse navbar-collapse navbar-ex1-collapse">
				<b><ul class="nav navbar-nav navbar-right">
					<li class="hidden"><a class="page-scroll" href="#page-top"></a> </li>
					<li><a class="page-scroll scroll" href="#home">{{ trans('message.home') }}</a></li>
					<li><a class="page-scroll scroll" href="#category">{{ trans('message.cate') }}</a></li>
					<li><a class="page-scroll scroll" href="#product">{{ trans('message.pd') }}</a></li>
					<li><a class="page-scroll scroll" href="#order">{{ trans('message.order') }}</a></li>
					<li><a class="page-scroll scroll" href="#cart">{{ trans('message.cart') }}</a></li>
					<li><a class="page-scroll scroll" href="#contact">{{ trans('message.ct') }}</a></li>
					<li><a class="page-scroll scroll" href="#login">{{ trans('message.lgin') }}</a></li>
				</ul></b>
			</div>
		</nav>
	</div>
	<div class="slider">
		<div class="callbacks_container w3l">
			<ul class="rslides" id="slider">
				<li>
					<div class="slider-img w3-oneimg">					
					<div class="slider-info">
						<h4>{{ trans('message.tt1') }}</h4>
						<p>{{ trans('message.dt1') }}</p>
						<div class="w3layouts_more-buttn">
							<a>{!! Form::label('rm',trans('message.rm'), ['data-toggle' => 'modal', 'data-target' => '#myModal']) !!}</a>
						</div>
					</div>
				</li>
				<li>
					<div class="slider-img w3-twoimg">					
					</div>
					<div class="slider-info">
						<h4>{{ trans('message.tt2') }}</h4>
						<p>{{ trans('message.dt2') }}</p>
						<div class="w3layouts_more-buttn">
							<a>{!! Form::label('rm',trans('message.rm'), ['data-toggle' => 'modal', 'data-target' => '#myModal']) !!}</a>
						</div>
					</div>
				</li>
				<li>
					<div class="slider-img w3-threeimg">					
					</div>
					<div class="slider-info">
						<h4>{{ trans('message.tt3') }}</h4>
						<p>{{ trans('message.dt3') }}</p>
						<div class="w3layouts_more-buttn">
							<a>{!! Form::label('rm',trans('message.rm'), ['data-toggle' => 'modal', 'data-target' => '#myModal']) !!}</a>
						</div>
					</div>
				</li>
				<li>
					<div class="slider-img w3-fourimg">					
					</div>
					<div class="slider-info">
						<h4>{{ trans('message.tt4') }}</h4>
						<p>{{ trans('message.dt4') }}</p>
						<div class="w3layouts_more-buttn">
							<a>{!! Form::label('rm',trans('message.rm'), ['data-toggle' => 'modal', 'data-target' => '#myModal']) !!}</a>
						</div>
					</div>
				</li>
				<li>
					<div class="slider-img w3-fiveimg">					
					</div>
					<div class="slider-info">
						<h4>{{ trans('message.tt5') }}</h4>
						<p>{{ trans('message.dt5') }}</p>
						<div class="w3layouts_more-buttn">
							<a>{!! Form::label('rm',trans('message.rm'), ['data-toggle' => 'modal', 'data-target' => '#myModal']) !!}</a>
						</div>
					</div>
				</li>
				<li>
					<div class="slider-img w3-siximg">					
					</div>
					<div class="slider-info">
						<h4>{{ trans('message.tt6') }}</h4>
						<p>{{ trans('message.dt6') }}</p>
						<div class="w3layouts_more-buttn">
							<a>{!! Form::label('rm',trans('message.rm'), ['data-toggle' => 'modal', 'data-target' => '#myModal']) !!}</a>
						</div>
					</div>
				</li>
				<li>
					<div class="slider-img w3-sevenimg">
					</div>
					<div class="slider-info">
						<h4>{{ trans('message.tt7') }}</h4>
						<p>{{ trans('message.dt7') }}</p>
						<div class="w3layouts_more-buttn">
							<a>{!! Form::label('rm',trans('message.rm'), ['data-toggle' => 'modal', 'data-target' => '#myModal']) !!}</a>
						</div>
					</div>
				</li>
			</ul>
		</div>
		<div class="clearfix"></div>
	</div>
	<!--//Slider-->
	<!-- modal-about -->
	<div class="modal bnr-modal fade" id="myModal" tabindex="-1" role="dialog">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				</div>
				<div class="modal-body modal-spa">
					{!! Form::image('images/g2.jpg', '', ['class' => 'img-responsive']) !!}
					<div class="modal-w3lstext">
						<h4>{{ trans('message.fd') }}</h4>
						<p>{{ trans('message.dtfd') }}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="footer">
		<div class="container">
			<div class="footer-grids">
				<div class="col-md-3 col-sm-6 my-info">
					<h4>{{ trans('message.ab') }}</h4>
					<p>{{ trans('message.info') }}</p>
					<h2><a> {!! Form::label('rm',trans('message.rm'), ['data-toggle' => 'modal', 'data-target' => '#myModal']) !!}</a></h2>
					<div class="clearfix"></div>
				</div>
				<div class="col-md-3 col-sm-6 menu">
					<h4>{{ trans('message.menu') }}</h4>
					<p><a class="page-scroll scroll" href="#menu"><span class="fa fa-long-arrow-right" aria-hidden="true"></span>{{ trans('message.br') }}</a></p>
					<p><a class="page-scroll scroll" href="#menu"><span class="fa fa-long-arrow-right" aria-hidden="true"></span>{{ trans('message.lu') }}</a></p>
					<p><a class="page-scroll scroll" href="#menu"><span class="fa fa-long-arrow-right" aria-hidden="true"></span>{{ trans('message.dn') }}</a></p>
					<p><a class="page-scroll scroll" href="#menu"><span class="fa fa-long-arrow-right" aria-hidden="true"></span>{{ trans('message.spfo') }}</a></p>
					<p><a class="page-scroll scroll" href="#menu"><span class="fa fa-long-arrow-right" aria-hidden="true"></span>{{ trans('message.dr') }}</a></p>
					<p><a class="page-scroll scroll" href="#menu"><span class="fa fa-long-arrow-right" aria-hidden="true"></span>{{ trans('message.icr') }}</a></p>
				</div>
				<div class="col-md-3 col-sm-6 iteams">
					<h4>{{ trans('message.ltw') }}</h4>
					<ul class="agile_footer_grid_list">
						<li><span class="fa fa-twitter" aria-hidden="true"></span>{{ trans('message.stt1') }}<span>{{ trans('message.time1') }}</span></li>
						<li><span class="fa fa-twitter" aria-hidden="true"></span>{{ trans('message.stt2') }}<span>{{ trans('message.time2') }}</span></li>
					</ul>
				</div>
				<div class="clearfix"></div>
			</div>
			<div class="copyright">
				<p>{!! trans('message.right') !!}</p>
			</div>
		</div>
	</div>
	@yield('content')
	<!-- direct map -->
	<div class="contact-top">
		<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.717249484117!2d108.21777281485858!3d16.08015588887413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142183be275f1cf%3A0x3b5bc9a70944099c!2zdOG6p25nIDQsIDE2IEzDvSBUaMaw4budbmcgS2nhu4d0LCBUaOG6oWNoIFRoYW5nLCBI4bqjaSBDaMOidSwgxJDDoCBO4bq1bmcgNTUwMDAw!5e0!3m2!1sen!2s!4v1533784494397"></iframe>
	</div>
</body>
</html>
