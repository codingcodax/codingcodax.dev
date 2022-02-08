import { MotionSvg } from '@/components/ui';
import { outputVariants } from 'animations/pages';

const Icons = ({ ...props }) => {
  return (
    <MotionSvg
      xmlns='http://www.w3.org/2000/svg'
      fill='currentColor'
      viewBox='0 0 580 580'
      variants={outputVariants}
      initial='hidden'
      animate='show'
      {...props}
    >
      <defs />
      <path d='M52.87 106.653c-1.927.524-3.783.093-4.436-1.819-.186-.545-4.534-13.454-2.908-24.338.445-2.977 2.544-13.555 10.894-24.678 8.612-11.468 20.364-20.323 35.436-24.42 15.075-4.096 29.628-2.39 42.755 3.168 12.754 5.401 19.784 13.49 21.634 15.84 6.773 8.602 9.363 21.954 9.47 22.517.396 2.078-1.13 3.48-3.213 3.888-2.077.41-3.92-.323-4.313-2.399-.023-.12-2.365-12.106-7.976-19.231-3.232-4.104-9.822-9.818-18.634-13.55-11.515-4.876-24.137-5.505-37.513-1.87-13.373 3.634-23.982 10.576-31.533 20.632-5.767 7.683-8.652 15.978-9.429 21.179-1.352 9.056 2.542 20.616 2.583 20.731.682 1.998-.55 3.568-2.554 4.267a2.59 2.59 0 01-.263.083z' />
      <path d='M77.882 129.497l-2.363.642s-.697-1.329-1.572-1.091c-.873.237-1.126.594-.891 1.481l.253.962c-.14-.532-1.38-.377-1.906-.235l-1.898.516c-.527.145-1.663.636-1.523 1.168l.886 3.349-.443.12c-2.496-.769-5.414-2.794-6.576-4.636-.946-1.5-.964-3.384-.927-5.172a29.745 29.745 0 00-.037-2.061c-.076-1.398-.378-3.187-1.733-4.218.325-.197.574-.502.705-.864.13-.363.136-.76.014-1.126l-3.669-11.04a1.673 1.673 0 00-.828-.962 1.608 1.608 0 00-1.25-.087l-5.447 1.858-3.144-9.412a.842.842 0 00-.414-.481.803.803 0 00-.625-.041.805.805 0 00-.471.416.844.844 0 00-.044.636l11.862 35.526a.43.43 0 00.024.064c.082.192 2.308 4.646 3.648 6.514.68.945 3.468 5.095 7.247 8.594l6.163 23.33c.14.532.11.992.635.849l4.942-1.343.682 2.578c.141.535 1.57 1.152 2.094 1.01l1.9-.516c.526-.143 1.474-1.407 1.332-1.942l.085.322c.234.887.797 1.161 1.67.924.876-.238 1.227-.761.993-1.648l-.053-.198 2.096-.57s1.881-1.08 2.007-3.795c0 0 .425-5.646-3.173-19.294-3.611-13.642-6.718-18.147-6.718-18.147-1.45-2.287-3.533-1.98-3.533-1.98zm-13.958 8.136c-.525.142-.475-.245-.334.287l2.148 8.132c-2.146-2.72-4.411-5.028-4.898-5.708-1.18-1.644-3.14-5.802-3.314-6.204l-4.047-11.889 4.497-1.541c1.24.521 1.808 1.7 1.921 3.784.033.618.01 1.265 0 1.891-.038 1.857.023 4.169 1.13 5.925 1.026 1.631 3.323 3.76 5.524 4.609l-2.627.714zm22.926 33.495a.664.664 0 01-.162.335.643.643 0 01-.597.204.64.64 0 01-.422-.271.674.674 0 01-.11-.498c.02-.132.444-3.649-3.705-19.356-4.179-15.814-6.51-19.29-6.532-19.323a.668.668 0 01-.11-.496.673.673 0 01.263-.43.652.652 0 01.91.149c.098.137 2.454 3.553 6.735 19.756 4.286 16.23 3.755 19.787 3.73 19.93zm63.42-58.38s-.455 5.527 3.141 19.174c3.613 13.643 6.763 18.315 6.763 18.315 1.449 2.288 3.602 2.237 3.602 2.237l1.988-.54.053.198c.234.888.796 1.162 1.67.924.876-.238 1.227-.76.992-1.647l-.085-.322c.141.534 1.692 1.118 2.217.976l1.9-.517c.525-.142 1.35-1.373 1.209-1.907l-.681-2.579 5.051-1.373c.526-.142.163-.495.023-1.028l-6.164-23.329c.216-4.585 1.971-9.969 2.09-11.132.241-2.297-.143-7.251-.164-7.46-.003-.024.077-.068.072-.091l-7.198-36.792a.83.83 0 00-.337-.531.797.797 0 00-1.244.523.844.844 0 00.005.325l1.925 9.742-5.631 1.148a1.61 1.61 0 00-1.039.705 1.717 1.717 0 00-.245 1.252l2.263 11.408a1.65 1.65 0 001.598 1.336c-.666 1.579-.06 3.234.564 4.483.294.586.632 1.157.959 1.706.913 1.528 1.877 3.365 1.797 5.144-.097 2.186-1.626 5.419-3.41 7.352l-.548.149-.885-3.349c-.141-.533-1.261-.411-1.784-.268l-1.899.516c-.525.143-1.784.667-1.643 1.199l-.254-.962c-.235-.887-.574-1.082-1.449-.845-.874.238-.77 1.728-.77 1.728l-2.361.641c-.002-.001-1.964.776-2.091 3.491zm15.559-2.81c1.489-1.852 2.432-4.861 2.518-6.797.093-2.082-.94-3.92-1.888-5.511a29.088 29.088 0 01-.949-1.736c-.93-1.861-1.015-3.222-.197-4.304l4.682-.98 2.423 12.318c.049.437.204 5.076-.009 7.098-.084.836-.963 3.993-1.481 7.437l-2.148-8.131c-.141-.531.202-.251-.322-.108l-2.629.714zm-7.308 20.77c-4.281-16.203-3.923-20.356-3.907-20.524a.672.672 0 01.238-.446.64.64 0 01.476-.145c.171.017.33.102.441.237.11.136.164.311.149.487-.005.041-.309 4.233 3.869 20.047 4.15 15.708 6.25 18.537 6.33 18.643a.67.67 0 01-.305 1.061.657.657 0 01-.253.029.656.656 0 01-.445-.237c-.091-.113-2.306-2.924-6.593-19.152zM360.952 449.002c-2.982 1.935-4.318 3.592-3.983 5.075.237.892-.222 1.467-1.97 2.617-3.906 2.636-4.46 2.843-10.579 4.45-5.046 1.258-6.453 1.809-9.035 3.58-2.671 1.85-3.04 2.344-3.065 3.926-.041 1.529-.409 2.023-2.698 3.433-1.479.908-3.257 1.981-3.947 2.478-2.005 1.446-3.435 1.271-6.012 1.803-8.002 1.612-13.142 5.034-12.31 8.182.208.787-.199 1.347-1.729 2.269a74.042 74.042 0 00-4.103 2.521c-1.375.88-3.418 1.548-6.473 2.153-7.692 1.528-13.335 5.143-12.572 8.029.262.997-.968 2.006-.968 2.006l-11.133 7.815 10.505 39.764c14.223 2.065 50.258 7.158 50.258 7.158l98.906-62.752-10.359-39.21-10.08-1.423s-4.331-.448-5.381-1.062c-.387-2.313-5.346-3.446-10.669-2.393-5.957 1.169-13.03-.847-14.298-1.231-1.2-4.119-12.24-2.466-18.305.812zm16.152-1.409c.997.629 1.038.786.405 1.746-1.23 1.852-3.819 3.175-8.63 4.482-5.121 1.392-8.237 1.564-9.877.604-1.89-1.182.631-3.213 1.897-3.946 3.186-2.109 12.523-5.166 16.205-2.886zm10.497 3.841c-2.909 1.557-5.886 3.465-5.655 4.939 1.226 5.166 2.017 8.704 2.961 9.008 6.113 1.335 13.733-.181 18.602-4.099 2.24-2.015 2.24-2.015 1.66-4.838-.409-1.97-.449-2.593.008-2.625.764-.053 11.664 1.59 11.664 1.59l-96.658 58.949-47.022-5.176 9.952-7.251.554 2.099c.762 2.886 1.647 3.715 4.511 4.061 5.662.654 15.377-2.661 17.75-6.061 1.078-1.587 1.084-1.982.252-5.131-.901-3.41-1.941-5.04-3.667-5.695-.81-.342-.415-.731 2.105-2.316l3.1-1.911c1.871 5.57 1.424 5.076 3.216 5.919 4.82 2.034 19.686-2.976 20.605-7.05.172-.609-.175-2.764-.716-4.811-.873-3.305-1.344-4.246-2.662-4.619l-2.147-.569 3.003-1.857c3.523-2.194 3.784-2.737 4.172-.995.671 2.856 1.329 3.774 2.522 4.294 4.942 1.919 16.968-1.462 19.809-5.609 1.13-1.6 1.127-1.824.025-5.574-.986-3.106-1.443-3.994-2.637-4.738l-1.523-.936 2.816-1.722c1.531-.922 2.934-1.697 3.141-1.753.207-.057.64.951.958 2.157.736 2.781 1.93 3.525 5.739 3.671 5.472.144 14.497-3.265 16.37-6.248.557-.827.519-1.885.082-3.678l-.684-2.795c2.35.396 5.229 1.059 7.794 1.37zm-37.932 10.477c4.312-.048 4.763 2.079 1.046 4.383-5.322 3.358-16.133 4.834-16.784 2.368-.722-2.729 8.437-6.68 15.738-6.751zm50.515-11.536c2.943.438 3.189 1.158 1.004 3.383-2.184 2.224-12.324 4.98-15.675 4.26-2.999-.647-3.399-1.326-1.608-2.938 3.288-3.086 11.538-5.441 16.279-4.705zm-74.258 26.817c2.802.532 3.159 1.673 1.098 3.526-2.329 2.096-12.508 4.918-15.751 4.393-5.849-.941-.341-5.699 8.658-7.526 2.162-.419 4.888-.598 5.995-.393zm102.638 15.65l-97.108 61.254-10.199-38.608 97.547-59.591 9.76 36.945zm-127.892-.632c2.592.365 3.625 1.546 2.449 2.765-2.707 2.761-10.367 5.461-15.28 5.334-5.759-.178-5.454-2.173.8-5.785 1.879-1.073 9.858-2.567 12.031-2.314zm18.922 23.73l10.199 38.608-47.874-6.763-9.818-37.165 47.493 5.32z' />
      <path d='M357.215 471.273c-.172.609.175 2.765.689 4.706 1.108 4.198 1.38 5.258 4.93 5.474 4.107.295 12.713-2.283 15.154-3.959 3.289-2.243 3.423-2.786 2.036-8.033-1.217-4.378-.982-4.558-3.956-5.111-2.084-.333-3.788-.208-7.438.671-3.137.568-10.397 3.055-11.415 6.252zm18.223-5.74c3.155.606 3.432 1.655 1.074 3.645-2.729 2.261-12.352 4.876-15.521 4.218-3.806-.765-3.03-2.673 2.305-5.488 2.867-1.513 9.927-2.785 12.142-2.375zm-38.579 16.84c-2.293 1.186-4.467 3.239-4.604 4.401-.03.514.314 2.445.785 4.229.984 3.726 2.228 5.075 5.106 5.474 5.183.728 15.232-2.79 17.477-6.043 1.13-1.601 1.15-1.944.18-5.617-.943-3.568-1.223-3.998-2.717-4.829-.905-.485-2.871-.794-4.352-.73-3.38.085-9.182 1.765-11.875 3.115zm14.157-1.823c2.281.449 2.99 1.662 1.829 2.934-3.804 4.071-18.281 6.993-19.113 3.844-.262-.997 1.846-3.088 4.398-4.344 3.373-1.479 9.312-3.056 12.886-2.434zm-38.711 16.113c-2.293 1.185-4.468 3.238-4.604 4.4-.031.515.313 2.446.784 4.23.984 3.726 2.228 5.075 5.106 5.474 5.182.728 15.232-2.79 17.478-6.044 1.129-1.6 1.15-1.943.179-5.616-.942-3.568-1.222-3.998-2.717-4.83-.905-.485-2.872-.794-4.352-.729-3.38.085-9.181 1.764-11.874 3.115zm14.156-1.823c2.282.449 2.99 1.662 1.829 2.934-3.804 4.07-18.281 6.992-19.112 3.844-.264-.997 1.846-3.089 4.397-4.344 3.373-1.479 9.312-3.056 12.886-2.434zM566.127 215.131h-81.84c-7.502 0-13.639 6.226-13.639 13.835v83.006c0 7.609 6.137 13.835 13.639 13.835h81.84c7.502 0 13.64-6.226 13.64-13.835v-83.006c0-7.609-6.138-13.835-13.64-13.835zm-61.38 6.917c3.751 0 6.82 3.113 6.82 6.918 0 3.804-3.069 6.917-6.82 6.917-3.751 0-6.82-3.113-6.82-6.917 0-3.805 3.069-6.918 6.82-6.918zm-20.46 0c3.752 0 6.821 3.113 6.821 6.918 0 3.804-3.069 6.917-6.821 6.917-3.751 0-6.82-3.113-6.82-6.917 0-3.805 3.069-6.918 6.82-6.918zm88.66 89.924c0 3.805-3.069 6.917-6.82 6.917h-81.84c-3.751 0-6.82-3.112-6.82-6.917v-62.255c0-3.804 3.069-6.917 6.82-6.917h81.84c3.751 0 6.82 3.113 6.82 6.917v62.255z' />
      <path d='M512.931 293.987l-13.64-10.375c-1.022-.692-1.364-1.73-1.364-2.767 0-1.038.342-2.075 1.364-2.767l13.64-10.376c1.364-1.038 3.751-.692 4.775.692 1.022 1.383.681 3.804-.683 4.842l-9.888 7.609 9.888 7.609c1.364 1.037 1.705 3.458.683 4.842-1.024 1.383-3.411 1.729-4.775.691zm19.778-.691c-1.024-1.384-.682-3.805.682-4.842l9.888-7.609-9.888-7.609c-1.364-1.038-1.706-3.459-.682-4.842 1.023-1.384 3.409-1.73 4.773-.692l13.641 10.376c1.022.692 1.364 1.729 1.364 2.767 0 1.037-.342 2.075-1.364 2.767l-13.641 10.375c-1.364 1.038-3.75.692-4.773-.691zM58.514 320.536s-4.822 35.959 56.464 94.502c0 0-1.5-18.131-12.642-33.958 0 0-1.632 5.758-3.004 6.139-1.371.382 1.852-4.863-.85-9.042-2.7-4.179-33.539-42.542-39.968-57.641z' />
      <path d='M58.182 320.341s-1.501 23.656 21.37 59.111c0 0-10.246-5.525-18.083-13.772 0 0 4.567 9.972 18.832 14.752 0 0 14.901 21.09 33.109 38.405 0 0-56.115-22.836-54.541-56.178 0 0-10.582-12.935-6.747-25.597 0 0 2.439 2.818 3.15 2.507 0 0-2.226-3.142-2.333-5.574-.11-2.434 3.861-12.192 5.243-13.654z' />
      <path d='M114.12 419.635s-15.828-4.692-21.42-10.006c0 0 5.013 10.605 19.039 13.024 0 0 1.526.414.657 1.314-.87.902-6.481 3.451-9.786.884 0 0 .759 4.461 15.108 4.259 0 0 8.256.541-.525 1.831 0 0-6.752.772 1.347 1.42 8.099.645 12.735 3.931 12.735 3.931s-16.906-16.319-17.155-16.657zm.915-14.471s1.445-1.891 5.462 7.611c4.811 11.377 4.384 3.789 3.368.55-1.018-3.242.811-1.053.811-1.053 3.629 3.801 4.15 8.917 4.178 9.416.027.498-.726 5.731-.726 5.731l-12.592-11.867c1.189-3.156-.385-10.594-.385-10.594' />
      <path d='M90.832 393.564s23.22 28.179 56.192 55.399c0 0 1.784-2.909-2.984-6.864-29.598-24.556-50.882-49.08-50.882-49.08l-.63-.721' />
      <path d='M90.832 393.564C70.948 368.513 66.817 353.8 66.817 353.8s6.059 14.852 25.713 38.497' />
      <path
        fillRule='evenodd'
        d='M387.449 25.055c.263-.073.541-.073.804 0l53.358 14.925c.645.18 1.09.768 1.09 1.438v67.164a1.49 1.49 0 01-1.09 1.437l-53.358 14.926a1.503 1.503 0 01-.804 0l-53.359-14.926a1.492 1.492 0 01-1.09-1.437V41.418c0-.67.446-1.257 1.09-1.438l53.359-14.925zm-11.133 6.214l11.618 3.29 11.561-3.26-11.644-3.257-11.535 3.227zm28.701 1.575l-11.596 3.27 13.497 3.823 11.629-3.308-13.53-3.785zm19.031 5.323l-11.663 3.318 11.657 3.302 11.69-3.351-11.684-3.269zm15.668 5.231l-14.179 4.066v19.283l14.179-4.066V43.4zm0 22.389l-14.179 4.065v19.176l14.179-3.966V65.787zm0 22.374l-14.179 3.966v19.289l14.179-3.966V88.161zm-17.164 24.09V92.963l-16.045 4.488v19.288l16.045-4.488zm-19.03 5.323V98.286l-14.179 3.966v19.288l14.179-3.966zm-17.164 3.966v-19.288l-14.179-3.966v19.288l14.179 3.966zm-17.164-4.801V97.451l-16.045-4.488v19.288l16.045 4.488zm-19.03-5.323V92.128l-14.179-3.967v19.289l14.179 3.966zm-14.179-26.354l14.179 3.966V70.113l-14.179-3.967v18.916zm0-22.015l14.179 3.966v-19.55l-14.179-4.065v19.649zm3.985-21.611l11.69 3.351 11.684-3.294-11.691-3.326-11.683 3.269zm17.184-4.807l11.669 3.32 13.622-3.842-11.64-3.297-13.651 3.819zm30.778 1.032l-13.634 3.845 13.553 3.855 13.602-3.87-13.521-3.83zm18.988 5.379l-13.614 3.873 11.707 3.33 13.586-3.895-11.679-3.308zm15.632 5.28l-16.045 4.6v19.283l16.045-4.6V48.32zm0 22.388l-16.045 4.6v19.043l16.045-4.488V70.708zm-19.03 24.478V76.164l-14.179 4.065v18.923l14.179-3.966zm-17.164 3.966V80.237l-14.179-3.966v18.915l14.179 3.966zm-17.164-4.801V75.436l-16.045-4.488v18.915l16.045 4.488zm-16.045-26.503l16.045 4.488V52.92l-16.045-4.6v19.528zm3.965-21.497l13.574 3.892 11.708-3.33-13.577-3.862-11.705 3.3zm30.737 2.113l-11.729 3.337 11.729 3.363L399.58 51.8l-11.729-3.337zm15.671 5.312l-14.179 4.065v19.283l14.179-4.066V53.776zm-17.164 23.361V57.841l-14.179-4.065V73.17l14.179 3.966z'
        clipRule='evenodd'
      />
    </MotionSvg>
  );
};

export default Icons;
