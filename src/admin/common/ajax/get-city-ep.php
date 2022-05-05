<?php
namespace Phppot;

use Phppot\CountryState;
if (! empty($_POST["state_id"])) {
    
    $stateId = $_POST["state_id"];
    
    require_once __DIR__ . '/../Model/CountryStateCity.php';
    $countryStateCity = new CountryStateCity();
    $cityResult = $countryStateCity->getCityByStateId($stateId);
    ?>
<option>Select City</option>
<?php
foreach ($cityResult as $city) {
        ?>
<option value="<?php echo $city["id"]; ?>"><?php echo $city["name"]; ?></option>
<?php
    }
}
?>