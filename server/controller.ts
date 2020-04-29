import model from './model';

class Controller {
  constructor() {}

  getCrushes() {
    return model.find({});
  }

  select(req, res) {
    this.getCrushes().then(crushes => res.status(200).json(crushes))
      .catch(err => res.status(400).json(err))
  }

  getCrushesById(id) {
    return model.findById(id);
  }

  selectOne(req, res) {
    const id = { _id: req.params.id }
    this.getCrushesById(id).then(crushes => res.status(200).json(crushes))
      .catch(err => res.status(400).json(err))
  }
}

export default Controller;