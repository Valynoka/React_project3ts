import React from "react";


type HeaderSvgSelectorProps = {
	id: string,
}

const HeaderSvgSelector: React.FC<HeaderSvgSelectorProps> = (props) => {
	const { id } = props;

	switch (id){
		case 'svg':
			return(
				<svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M14.5 7.54545L15.3 7.54545L14.5 7.54545ZM8 17L7.5541 17.6642C7.8238 17.8453 8.1762 17.8453 8.4459 17.6642L8 17ZM1.5 7.54545H0.7H1.5ZM8 1V1.8V1ZM13.7 7.54545C13.7 9.77145 12.2601 11.9407 10.6673 13.6336C9.88698 14.4631 9.10395 15.1424 8.51516 15.6145C8.22139 15.8501 7.97757 16.0328 7.80876 16.1556C7.72439 16.2169 7.65888 16.2632 7.61536 16.2936C7.5936 16.3088 7.57736 16.3199 7.56701 16.327C7.56184 16.3305 7.55814 16.3331 7.55598 16.3345C7.55489 16.3353 7.55419 16.3357 7.55387 16.3359C7.55372 16.3361 7.55366 16.3361 7.55369 16.3361C7.55371 16.3361 7.55381 16.336 7.55382 16.336C7.55395 16.3359 7.5541 16.3358 8 17C8.4459 17.6642 8.4461 17.6641 8.44633 17.6639C8.44643 17.6639 8.44668 17.6637 8.4469 17.6635C8.44733 17.6632 8.44786 17.6629 8.44849 17.6625C8.44975 17.6616 8.45141 17.6605 8.45345 17.6591C8.45753 17.6564 8.46315 17.6525 8.47028 17.6476C8.48453 17.6379 8.50479 17.624 8.53064 17.6059C8.58233 17.5699 8.65647 17.5175 8.74983 17.4495C8.93649 17.3138 9.20049 17.1158 9.51609 16.8628C10.146 16.3576 10.988 15.6278 11.8327 14.73C13.4899 12.9684 15.3 10.4104 15.3 7.54545H13.7ZM8 17C8.4459 16.3358 8.44605 16.3359 8.44618 16.336C8.44619 16.336 8.44629 16.3361 8.44631 16.3361C8.44634 16.3361 8.44628 16.3361 8.44613 16.3359C8.44581 16.3357 8.44511 16.3353 8.44402 16.3345C8.44186 16.3331 8.43816 16.3305 8.43299 16.327C8.42264 16.3199 8.4064 16.3088 8.38464 16.2936C8.34112 16.2632 8.27561 16.2169 8.19124 16.1556C8.02243 16.0328 7.77861 15.8501 7.48484 15.6145C6.89605 15.1424 6.11302 14.4631 5.33267 13.6336C3.73993 11.9407 2.3 9.77145 2.3 7.54545H0.7C0.7 10.4104 2.51007 12.9684 4.16733 14.73C5.01198 15.6278 5.85395 16.3576 6.48391 16.8628C6.79951 17.1158 7.06351 17.3138 7.25017 17.4495C7.34353 17.5175 7.41767 17.5699 7.46936 17.6059C7.49521 17.624 7.51547 17.6379 7.52972 17.6476C7.53685 17.6525 7.54247 17.6564 7.54655 17.6591C7.54859 17.6605 7.55025 17.6616 7.55151 17.6625C7.55213 17.6629 7.55267 17.6632 7.5531 17.6635C7.55332 17.6637 7.55357 17.6639 7.55367 17.6639C7.5539 17.6641 7.5541 17.6642 8 17ZM2.3 7.54545C2.3 6.01987 2.90188 4.55789 3.97146 3.48083L2.83615 2.35341C1.46776 3.73137 0.7 5.59911 0.7 7.54545L2.3 7.54545ZM3.97146 3.48083C5.04085 2.40396 6.49007 1.8 8 1.8V0.2C6.06211 0.2 4.20473 0.975258 2.83615 2.35341L3.97146 3.48083ZM8 1.8C9.50993 1.8 10.9591 2.40396 12.0285 3.48083L13.1638 2.35341C11.7953 0.975258 9.93789 0.2 8 0.2V1.8ZM12.0285 3.48083C13.0981 4.55789 13.7 6.01987 13.7 7.54545L15.3 7.54545C15.3 5.59911 14.5322 3.73137 13.1638 2.35341L12.0285 3.48083ZM9.36667 7.54545C9.36667 8.31388 8.74954 8.92727 8 8.92727V10.5273C9.64369 10.5273 10.9667 9.187 10.9667 7.54545H9.36667ZM8 8.92727C7.25046 8.92727 6.63333 8.31388 6.63333 7.54545H5.03333C5.03333 9.187 6.35631 10.5273 8 10.5273V8.92727ZM6.63333 7.54545C6.63333 6.77703 7.25046 6.16364 8 6.16364V4.56364C6.35631 4.56364 5.03333 5.90391 5.03333 7.54545H6.63333ZM8 6.16364C8.74954 6.16364 9.36667 6.77703 9.36667 7.54545H10.9667C10.9667 5.90391 9.64369 4.56364 8 4.56364V6.16364Z" fill="#101828"/>
				</svg>
			);
		default:
			return <svg />;
			break;
	}
}

export default HeaderSvgSelector;