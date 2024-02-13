import React from 'react';
import './leathers.scss';
import nappa from '../../assets/img/nappa.jpg';
import crazyHorse from '../../assets/img/crazyHorse.jpg';
import pullUp from '../../assets/img/pullUp.jpg';
import Back from '../../components/UI/Back/Back';

type Props = {};

const Leathers = (props: Props) => {
  return (
    <div className="leathers">
      <div className="leathers-heading">
        <Back />
        <h1>Skin types</h1>
      </div>
      <div className="leathers__container">
        <div className="leathers__container__leather">
          <h1 className="leathers__container__leather-heading">Crazy Horse</h1>
          <div className="leathers__container__leather__content">
            <div className="leathers__container__leather__content-text">
              <p>
                This is durable, high quality cattle leather. This
                The skin is characterized by its aging effect. It is formed
                thanks to special processing: on polished crust using
                heating, a mixture of waxes with a high melting point is applied
                and special additives. After treatment in this way, the skin
                becomes darker than it was originally. As a result
                it changes color in places of crease, bend or tension,
                becomes lighter.


              </p>
              <p>
              Vintage is the most important feature of this leather. On the skin
                Crazy Horse marks and scratches easily. Scratches when
                easy to remove if desired. To do this, just wipe this place
                soft cloth. Such skin is easily darkened by friction using
                felt circle even without adding wax. If you need
                uniform color of the skin, just iron it with an iron
                it to the minimum temperature through the paper.


              </p>
              <p>
                Crazy Horse leather is quite soft, elastic, smooth, without
                shine. The thickness is usually 1.4-3 mm. Has a dense structure.
                Products made from this leather look unusual, stylish, and expensive.
              </p>
            </div>
            <img
              src={crazyHorse}
              alt="crazyHorse"
              className="leathers__container__leather__content-img"
            />
          </div>
        </div>
        <div className="leathers__container__leather">
          <h1 className="leathers__container__leather-heading">Nappa</h1>
          <div className="leathers__container__leather__content">
            <img
              src={nappa}
              alt="nappa"
              className="leathers__container__leather__content-img"
            />
            <div className="leathers__container__leather__content-text">
              <p>
                An ideal option for true connoisseurs of quality
                materials. This type of leather is made from the hides of cattle.
                or sheepskin.


              </p>
              <p>
                Nappa leather is a very beautiful material that passes
                processing in a special way, and also “survives” chrome
                tanning. The main feature of the material is its
                monochromatic colors. In addition, nappa leather has the following
                characteristics: plastic, elastic, thin, and also soft.
                However, these properties do not prevent the material from having a high level
                strength and reliability. Therefore, products made from this leather
                durable, will serve the owner for more than one year.


              </p>
              <p></p>
              <p></p>
            </div>
          </div>
        </div>
        <div className="leathers__container__leather">
          <h1 className="leathers__container__leather-heading">Pull Up</h1>
          <div className="leathers__container__leather__content">
            <div className="leathers__container__leather__content-text">
              <p>
                Premium genuine waxed leather 1.4-1.6mm thick
                in rare cases it reaches 2mm. Buy products from it, in addition to
                high quality, excellent consumer properties, encourage
                unusual surface texture and two-tone, marbled coloring with
                aging effect.
              </p>
              <p>
                This dressing is obtained by applying special fats, oils,
                or refractory waxes on the surface of polished leather. How
                As a rule, the color of the coating mixture is darker than the background color of the base.
                The "Pull-up" effect is that in places where there is a bend or
                When stretched, the skin changes color and its specific properties appear.
              </p>
              <p>
                Over time, some areas of the skin become lighter,
                due to which a product made from such leather looks somewhat worn out,
                well-worn. An incomparable texture appears. Also
                this material is valued for its softness and pleasant to the touch
                texture.


              </p>
            </div>
            <img
              src={pullUp}
              alt="pullUp"
              className="leathers__container__leather__content-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leathers;
