import { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import CropService from '../Api/CropService'; // Ensure this path is correct
import { Footer } from "../components/Footer";

export function SellerMyCrops() {
    const [showModal, setShowModal] = useState(false);
    const [crop, setCrop] = useState({
        name: '',
        price: '',
        quantity: '',
       
        season: '',
        status: "APPROVED",
        farmerId: '1'
    });
    const [crops, setCrops] = useState([]);

    useEffect(() => {
        // Fetch crops data when the component mounts
        handleViewCrops();
    }, []);

    const openModal = (cropToEdit=null) => {
        if (cropToEdit) {
            setCrop(cropToEdit);
            // Set crop details for editing
        } else {
            setCrop({
                name: '',
                price: '',
                quantity: '',
                contact: '',
                season: '',
                status: "APPROVED",
                farmerId: '1'
            }); // Reset to empty crop details for adding
        }
        setShowModal(true); // Open the modal
    };

    const closeModal = () => setShowModal(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCrop((prevCrop) => ({
            ...prevCrop,
            [name]: value,
        }));
    };

    const handleViewCrops = () => {
        CropService.getCrop()
            .then((response) => {
                setCrops(response.data);
            })
            .catch((error) => {
                console.error("There was an error fetching the crop:", error);
            });
    };

    const handleDeleteCrop = (id) => {
        CropService.deleteCrop(id)
            .then(() => {
                alert("Crop deleted.");
                handleViewCrops(); // Refresh crops after deletion
            })
            .catch((error) => {
                alert("There was an error deleting the crop:", error);
            });
    };

    const handleUpdateCrop = (crop,id) => {
        CropService.updateCrop( crop,id) // Assuming updateCrop takes crop.id and crop data
            .then(() => {
                alert("Crop updated.");
                handleViewCrops(); // Refresh crops after update
            })
            .catch((error) => {
                alert("There was an error updating the crop:", error);
            });
    };

    const handleFileChange = (e) => {
        setCrop((prevCrop) => ({
            ...prevCrop,
            image: e.target.files[0], // To store the file
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission

        // Ensure all required fields are filled in
        if (!crop.name || !crop.quantity || !crop.price || !crop.contact || !crop.season) {
            alert("Please fill in all required fields.");
            return;
        }

        // If crop.id exists, it's an edit, otherwise it's an add
        if (crop.id) {
            // Call handleUpdateCrop to update the existing crop
            handleUpdateCrop(crop,crop.id);
        } else {
            // Add new crop
            CropService.addCrop(crop)
                .then((response) => {
                    console.log("Crop added successfully:", response);
                    closeModal();
                    handleViewCrops();
                })
                .catch((error) => {
                    console.error("There was an error adding the crop:", error);
                });
        }
    };

    return (
        <div className="myCrops">
            <div id="banner">
                <h4>My Crops</h4>
                <button id="s-add" onClick={() => openModal()}>Add New</button>
            </div>

            <Table striped bordered hover className="myCropsList table-responsive">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Season</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {crops.length > 0 ? (
                        crops.map((crop, index) => (
                            <tr key={index}>
                                <td>{crop.id}</td>
                                <td>{crop.name}</td>
                                <td>{crop.price}</td>
                                <td>{crop.quantity}</td>
                                <td>{crop.season}</td>
                                <td>
                                    <button id="s-edit" onClick={() => openModal(crop,crop.id)}>Edit</button>
                                    <button id="s-delete" onClick={() => handleDeleteCrop(crop.id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6" className="text-center">No crops available</td>
                        </tr>
                    )}
                </tbody>
            </Table>

            {/* Modal for adding or editing a crop */}
            <Modal show={showModal} className="modal" onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{crop.id ? 'Edit Crop' : 'Add New Crop'}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <form className="addNewCrop" onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name of crop</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter name of crop"
                                name="name"
                                value={crop.name}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicAddress">
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Price in Rupees"
                                name="price"
                                value={crop.price}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicQuantity">
                            <Form.Label>Quantity in quintals</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Quantity"
                                name="quantity"
                                value={crop.quantity}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        {/* <Form.Group className="mb-3" controlId="formBasicContact">
                            <Form.Label>Contact</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Contact"
                                name="contact"
                                value={crop.contact}
                                onChange={handleChange}
                            />
                        </Form.Group> */}

                        {/* Dropdown for season */}
                        <Form.Group className="mb-3" controlId="formBasicSeason">
                            <Form.Label>Season</Form.Label>
                            <Form.Control
                                as="select"
                                name="season"
                                value={crop.season}
                                onChange={handleChange}
                            >
                                <option value="">Select Season</option>
                                <option value="KHARIF">KHARIF</option>
                                <option value="Perennial">Perennial</option>
                                <option value="RABI">RABI</option>
                                <option value="ZAID">ZAID</option>
                            </Form.Control>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            {crop.id ? 'Save Changes' : 'Add Crop'}
                        </Button>
                    </form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
