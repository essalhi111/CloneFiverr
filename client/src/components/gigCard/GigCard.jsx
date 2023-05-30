import React from "react";
import "./GigCard.scss";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";

const GigCard = ({ item }) => {
  const { isLoading, error, data } = useQuery({
    queryKey: [item.userId],
    queryFn: () =>
      newRequest.get(`/users/${item.userId}`).then((res) => {
        return res.data;
      }),
  });
  return (
    <Link to={`/gig/${item._id}`} className="link">
      <div className="gigCard">
        <img src={item.cover} alt="" />
        <div className="info">
          {isLoading ? (
            "loading"
          ) : error ? (
            "Something went wrong!"
          ) : (
            <div className="user">
              <img src={data.img || "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAADKCAMAAAC7SK2iAAAAjVBMVEUsLCz+/v7t7e3////s7Oz19fX29vb5+fny8vL7+/sgICAjIyMoKCgmJiYYGBgSEhIcHBwPDw8QEBDk5OTT09NsbGze3t6zs7NGRkaRkZHFxcVZWVnLy8szMzNMTEyJiYmxsbGAgIB1dXUAAAA7Ozu+vr6np6dlZWWfn59fX1+Xl5d7e3tSUlJJSUlAQECH8yVsAAAMuElEQVR4nO1d63qqOBSFhEsCyKUq1tZWbWsv1un7P95AojUFgwF2IvZ0/1r9pnN2VklWFknItrBdBHZQGSXGNsOEYSpgn2GXY/brHsMewz7DbgkdjgnDVMA2w+zXnWpa2xaaQBWa4AlNaE5LhbQsE8fIsit5bYG6LeS1WV6H5bW9I8Yuw559xL4t5BWwkHePT1P/kVbSBMyb4OHzaWktbQ/q+AR1hTb8Uf+j3oa6I4x1OXU+vh1l6rW8KjIn5v3RBiS0gecVZU5oQ3+ZU04rlTmHBS7DZhAJmDBMBewz7DLsMewx7DLsM0wYpjWMGLYZFtLiWlpUS6vSBJW0SEhroQsON6epy+kebfYf9T/qDdR1iKxM7FTSSqlLmiClzn9gkDBIJZhbWJfhvZdkmIksYn9ym+VCVIJ5GwghrsulCrssmMq1Tdu2CSJbC0hk1bW9JO3k48lm9bpdPz09vb2t1+v5/PX9dTYmJqcXo5amTJvP5tNbK8iSOE6DIAzD0SgoI03TJJwX1E+Ntut2c8XDRnfz+yyLgzCyJJFGq5L7r6JOyGK+i5NgJCN9iOR2gbEh6vpFtujlk+VDEkif9Y+Iso+ctc0RjGz76aWm86eeOvsvDHfT9jMiW4jQ7DFT5M0ifH6a+ORUWvXpRUXnZR6+rYGWiayfL0dxC96cfPKZq+m8O1gPj9E6DlryZhFk9xuPEBihqXZ1E0YWj7NOxMsYJcHTLC98z1VSx3gXdmVeRhinX9PxZaj3FFk8j/swLyMKotLod51eBCxS57OaRVhQFiJGR+wz7HJMjthj2GPYLSHyRYxnz32Zl+SjHMvTMozqTWC/gmgj7ubhPQWRpasbAOYF93BBrsrDY7zKQJgX3NMJuSIji/ESinnB3cq9a6FevJ899lY4IUYPjl4P7wjUpdpOzlNH2Fk/n31PaRXhDp/WeSUPzzCq6jyy6touYFFYG0VW1PnFZzcH1xTpE/5OJZleiF/DpIZFhvAefvEMTryIZOuqTS91nTfm4XEOM6dVI7sjQzey+C7RQj2yxmjo1LepFupWMCWaqTvCjl8HD4/xV9u3c9W4WfmN1Emzhxd0vtnDt9X2A8Z3eoZ6GSE6P7200Hl1D+8reXj0ouuhF13+0x2wh3eXmkY6i2RBBmtkfU3yvo/Rx3CpO/LdBZDINkSjh8edPTzuuyB1PkY7r4+HdwSdd5Dls9ir4BG7NezVsFfBeA35unYysoVXS/sTuwITGQb38OQV7hVdFuF0gB4ekYlWidtHPB6ekUVkB/uOfjrS7fCok1ftA72M6OWHl+5Hnfd+ru18rHNt5+O7ig9jnVPnA43lHZsgXkQ2oUITXKEJh7F+xAdt52P9iNn5BWzxgyx7FTyNPQa9RkzNPPTCzS5thea4NVxnCOXh8a1eM/Md0QOF8fBQbg5pWps5ETf5sIwsmRnq74XGvw6M+lzHWuTJCJ/APDzIWCdPmt37MYrpDWiseyz2injEXjtM34xRLwydr9i0Gqsf2BJcbR8Pf2/Cyu2pb4gzJA9vkHr6ToDc3NVRD9b/LPXRmwvq4fuO9ak5mYv+IwhkrHsgYRukbgG1GWpe/zRIPbFh5nUgN7c05uYs67lIPCAjuzVIPXMGRf1d565LlfoYhjrQWF+ZpJ7DjPVmnytgrwnTjbGX1uKNfeK3ecmQsYKa1xcmVqL3kUxg5nUgNzcxtkpTrtMMysjmBp96Nh4UdWJwrGfOoDw81XiaohqRAzPWFVbgVVbjbXNONvqiipsDshX4/SoN6yuHed1u2IPxBXyY1+3vDRB7ZazHj+4xrmz97J+3Xdl3ke3B7Od1GDfn0Fz/DvM+2JLscIxskdfYWA/mA6OOja3JxjMg6jAevqBu7AWGWXiIc3MKp2jqJ2pOHGfxNqZMzchxG07RNJ+oEdla/DTRXtsR6nxGFuWGJD56JNXR1vGMLJCbc5HzYIY6W4sekpF1kWtohz1eDY/6zgz1JEdA1B0YD+86xBB1y65NLx09vOQkfPtT8fg/I9TDqd3jVPyPL5642gna3vmM7IMR6uk7rY+2Rm2XfucG5OY87JiZ3OI7X0a9rZsDo25odW6I1A0Z2WBpQ1EH8/AfhraZk8mJ6aWHh+//Zatj6u0lssZ9tX3/xVPV0nT08L6xtxcrlZyqOOPhhW4P6+GpuYNz7P1lQEaWGjxRYtU19pLUfYPbjTdA6/BAHn5scvelaR2+xR1UXO2EW2hkWLydxkNVkTXy4cs+nv1z2q5yOw2R3DenpO3ioXCTO62BffpogczDyyyNXR3l3c7DG3zq0QMe0oESZHCndbQDWowGom7ova2McApEXdnDN99Bhc2dmwvmQB6e/wXYX6P5VsnmGyapmTWaMtJXF3W9PVi4wBjsvjlq7jOI5K7RyNa0vW5p8HnqbYysuYNzaY6aqEtGvEhd4am3MbLG3tyil4Gtw3tjUxIfTl0g6hIP3/qybmPL8Ok76a7tPzw8/wso67z09mBs6oU9WeBqE9pqO2erYGkU74yeGDpRkpDaaGvWdv0rstQM82gn3YKQjHL91PHaSI8P5gOkbqbHJ3BbED08fFVkjRyYDFvfQSVq+wkPX53X25dZchB5NzC1h08/7YTYBCSIHX/eAhbr6PFnD1n3xcR1FclmeDeUFNjVdcGgEIE7SOrI0c48neNT1RMvT50A3ZAtj9jFcE8dysPzf+ZD71t7tvpugic0oaOH7zS5ybJ7uVbqwdvxo/1uk5vAFvqCRbLR6GvCr0ahufBN4ch918Y9fOBrvwOl7hTcEz2mbvRC6JCfejm7bywd+82R5QynWKlYk1n0ksTTcYFwPMZXUKzUe4SnnqzINRQr9eC3I0Lhao5Burl9Xh/+HFkyqV6eO1Dq4Hd2jD48NY29dLFSH3xxNp4RZeoSnZdS5z8w2L9YqQd++VxMJGkHV6zUAd6EGt37ytPLZQsdUejKAOm7ryw0l3Rz5XADvqUmnrhXQ30BumQR3eopb8X+TehipRj0qQdboj69tCpWSum3tpeYSvBB20t8ENYqPogs7E5MNiFuYxMOaUtMapjW8J66xMP3K1aKIOuAlPdoXlOxUsCdmHSLr6liJ+RNZFl+XdThzsxGD/YFqPcpVgr2wV+wxoaLlbb87KdarNQDu6wl3pwrVnqiCY3HwXUXKwV7hYlz1LUW9oWKlUJd1sKPyWlxc7qo20DU+TG5a6JuYyCdS7fanvrRw0MVK92LLNDXX2yBpkMt7Co2UqyUf38DdZ9wsnAraYdbrHQvrASIeuYc0w68WOlhiLlA1NNVWaXlioxsQR3qS8/k/rDldCXUCQF7dwuf55S1WTf1nsVKeS53vIW8tCN9mJGjzsuoX7pYKVvzmXwGKeiabJTs7grtVp5elD7jBy9WSpzZLoM/KDzKpjmmQtqheXjfnSwfYj1fsofZU+5WNx2HYWTLjrHawZdeP0aQTCcF+YFRRxTTxdONpgf+HWH2tiBwh8LZD8Xg7nMREyFFR78x8ZFfmOw2WPIl81kPLy9WqnK1Yv2aRZ/6k+VLEpj6sHOUvKwIphcvVooImrzfZsZ4s4jiYD2hF/XwPnEn89sEdgpXiyC53/A6IIBuTpF6GfncYD+vxigJlsVMjwxTR0UPy7em+3ktguzxvZzqO1PnvZ9rOx/rXNv5+K7ignqhdZPt180l+nk1ojT9WDkuLd9rtRcr9alXzGPZEHjzGMU3b5tC8TUXKy3n78v381qESTCdjYndzsOruzlMWT+/iJ6fjzAeTWdsjgM3suWf6v1xcM9bjDDO3lYO9oGpY7qZxsN83mKEcbLbLkgh+jAfdiLi58soMVmvrUeM0uRhvWF+zT431s+UNfJt9Pr4bLBsV/+IgiSersbUps3ljpqLn7h4vIziwXf0ehRd/3a56e7hCdl8aFhrMhTFwy/mPAd3MbLO61di8NZEHRHGz4v21NF4dI09vRrJXftCR2hsrJCLzkgWHYqVOr+Ceryh7YuVur+EOmrv4X8LddLeyP5Rv/Joov4Pj3VZKc/fovB3tHWx0t8zr8vuLmhwc7+DepOb+6P+L1KXva+Pn4MgCFkELCRY4Vd04FCtCc93XYqVsqPjLPjOpABVcO1/hcLt0pIOxUq5znN7c8R8t41/dbW/l4ZhvsHJv7raL4LX8P4Pz0fVacxT2Y1pXSGtJ6SVNEF7sdJO2171LwuBzite+FD4H/UBU5d6eK7zP/bcHOjDyU7TcnCPY9lmi5XWjrOoVw1VaILsIE+/YqUIgRQrVTzEdOqwqlNtQrdPMC5WrLTLcHNqaQ0Kjb7z8H/U4amfulvSBqSudo8s+/UeN2AJY73F3V++kPZgJc83of4X/x+9lux/C+PjXAAAAABJRU5ErkJggg=="} alt="" />
              <span>{data.username}</span>
            </div>
          )}
          <p>{item.title}</p>
          <div className="star">
            <img src="./img/star.png" alt="" />
            <span>
              {!isNaN(item.totalStars / item.starNumber) &&
                Math.round(item.totalStars / item.starNumber)}
            </span>
          </div>
        </div>
        <hr />
        <div className="detail">
           
          <div className="price">
            <span>Starting at
             $ {item.price} </span> 
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GigCard;